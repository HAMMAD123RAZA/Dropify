
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mysqlConnection from '../Connection.js';

export const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const [rows] = await mysqlConnection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const [result] = await mysqlConnection.execute(
      'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)',
      [fullName, email, hashPassword]
    );

    const newUser = {
      id: result.insertId,
      fullName,
      email,
      password: hashPassword
    };

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await mysqlConnection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = rows[0];
    const comparePs = await bcrypt.compare(password, user.password);

    if (!comparePs) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      // Generate token
      const token = jwt.sign({ userId: user.id }, 'your_secret_key');
      return res.status(200).json({
        message: "Login Successful",
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email
        },
        token: token 
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};