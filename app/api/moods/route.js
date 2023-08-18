import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Mood from "@/models/Mood";

export async function POST(req) {
  const {date, notes, moodRating} = await req.json();
  await connectMongoDB();
  await Mood.create({date, notes, moodRating})
  return NextResponse.json({message: "Mood created successfully!"}, {status: 201})
}

export async function GET() {
  await connectMongoDB();
  const moods = await Mood.find();
  return NextResponse.json({ moods });
}