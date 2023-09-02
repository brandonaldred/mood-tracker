import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Mood from "@/models/mood";

export async function POST(req) {
  const { date, notes, moodRating, userName } = await req.json();
  await connectMongoDB();
  await Mood.create({ date, notes, moodRating, userName })
  return NextResponse.json({message: "Mood created successfully!"}, {status: 201})
}

export async function GET(req) {
  const user = req.nextUrl.searchParams.get('user')
  await connectMongoDB();
  const moods = await Mood.find( { userName: user } ).sort({date: -1});
  return NextResponse.json({ moods });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Mood.findByIdAndDelete(id);
  NextResponse.json({message: "Topic deleted"}, {status: 200});
} 