import { connectToDB } from "@/utils/database";
import Zone from "@/models/zone";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const zone = searchParams.get("zone") || null;
  const pak = searchParams.get("pak") || null;

  try {
    await connectToDB();
    const price = await Zone.find(zone && pak ? { zone, pak } : {});

    return NextResponse.json({ price }, { status: 200 });
  } catch (error) {
    console.log(error.message);
  }
};
