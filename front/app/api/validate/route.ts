import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


const jwtKey = process.env.NEXT_PUBLIC_JWT_KEY || "secret";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log(body,'req.body.token');
        const token = body.token;

        // Verify the token using jwt.verify method
        const decode = jwt.verify(token, jwtKey);

        const message = JSON.stringify({  message: "Token verified", decode });

       return new NextResponse(message, {
           status: 200,
           headers: { 'content-type': 'application/json' }
       });
    } catch (error) {
        const message = JSON.stringify(error);
        return new NextResponse(message, {
            status: 403,
            headers: { 'content-type': 'application/json' }
        });

    }
}
