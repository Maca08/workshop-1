import { Request, Response } from "express"
import jwt from "jsonwebtoken"

const jwtKey = process.env["JWT_KEY"] || "secret";

const signIn = (req: Request, res: Response) => {
	const { email } = req.body
	if (!email) {
		return res.status(401).end()
	}

	const token = jwt.sign({ email }, jwtKey, {
		algorithm: "HS256",
	})
	console.log("token:", token)

	res.json({ token }).status(200)
	res.send()
}

export default signIn
