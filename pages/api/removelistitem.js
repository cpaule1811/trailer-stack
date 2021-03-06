import { getDatabaseConnection } from "../../utils/dbconnect"

export default async function handler(req, res) {
    const db = getDatabaseConnection();
    const { user_id, id } = req.body
    try { 
        const resp = await db("watchlist").where({ user_id: user_id, id: id }).del()
        res.json(resp)
    } catch { 
        res.json('error')
    }
    db.destroy()
  }