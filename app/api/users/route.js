import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req) {
  const { first_name, last_name, email_address, username, password, location, birthday, tracking } = await req.json();
  await connectMongoDB();
  await User.create({ first_name, last_name, email_address, username, password, location, birthday, tracking })
  return NextResponse.json({message: "User created successfully!"}, {status: 201})
}

export async function GET(req) {
  const user = req.body
  await connectMongoDB();
  const moods = await Mood.find( { userName: user } ).sort({date: -1});
  return NextResponse.json({ moods });
}

export async function DELETE(req) {
  const userName = req.nextUrl.searchParams.get('user');
  await connectMongoDB();
  await User.findByIdAndDelete(userName);
  NextResponse.json({message: "Topic deleted"}, {status: 200});
} 