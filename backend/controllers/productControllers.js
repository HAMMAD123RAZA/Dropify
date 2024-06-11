import mysqlConnection from "../Connection.js";


export const getProduct=(req,res)=>{
    const sql="SELECT * FROM product";
    mysqlConnection.query(sql,(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

 export const createProduct=(req,res)=>{
    const sql="INSERT INTO product (title,category,price,img,capacity) VALUES (?)";
    const values=[req.body.title, req.body.category, req.body.price, req.body.img,req.body.capacity];
    mysqlConnection.query(sql,[values],(err,data)=>{
    if(err) throw err;
    res.json(data);
    })
    }
