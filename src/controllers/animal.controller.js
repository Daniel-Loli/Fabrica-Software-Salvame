import pool from '../models/db.config.js';

export const viewAnimal = async (req, res)=>{
    const nombre = req.body()
    query = `select * from animal where nombreComun = '${nombre}'`;
    const [result] = await pool.query(query)
    console.log(result);
    res.send(result);
}