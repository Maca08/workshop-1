import express from "express"
import { signIn } from "./src/handlers"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors());

app.post("/signin", signIn)

app.listen(8000)
