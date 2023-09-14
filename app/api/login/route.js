import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
    let body = await req.json()
   
    await connectMongoDB()
    const user = await User.find( { username: body.username } )
    const dbPass = await user[0].password
    if(dbPass) {
        await bcrypt.compare(dbPass, body.password, (err, same) => {
            if (same) {
                return NextResponse.json({ message: "passwords match"}, {status: 200})
            }
            else {
                return NextResponse.json({ message: "invalid password"}, {status: 200})
            }
        })
    }
}
