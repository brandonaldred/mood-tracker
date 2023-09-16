import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req) {
    const { first_name, last_name, email_address, username, password, location, birthday, tracking } = await req.json();
    await connectMongoDB();
    await User.create({ first_name, last_name, email_address, username, password, location, birthday, tracking })
    return NextResponse.json({message: "User created successfully!"}, {status: 201})
  }