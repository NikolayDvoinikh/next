import { connectToDB } from "@/utils/database";
import Zone from "@/models/zones";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("zone") || null;
  const limit = searchParams.get("limit") || 5;
  try {
    await connectToDB();
    const zone = await Zone.find(query ? { zone: query } : {}).limit(limit);

    return NextResponse.json(zone, { status: 200 });
  } catch (error) {
    console.log(error.message);
  }
};
