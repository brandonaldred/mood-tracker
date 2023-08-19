import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Mood from "@/models/mood";

export async function POST(req) {
  const { date, notes, moodRating } = await req.json();
  await connectMongoDB();
  await Mood.create({ date, notes, moodRating })
  return NextResponse.json({message: "Mood created successfully!"}, {status: 201})
}

export async function GET() {
  await connectMongoDB();
  const moods = await Mood.find();
  return NextResponse.json({ moods });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Mood.findByIdAndDelete(id);
  NextResponse.json({message: "Topic deleted"}, {status: 200});
}