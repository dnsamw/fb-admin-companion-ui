import { cards } from "@lib/lib";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.json(cards);
  } catch (error) {}
}
