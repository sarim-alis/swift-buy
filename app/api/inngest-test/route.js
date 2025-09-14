// File: src/app/api/inngest-test/route.js
import { inngest } from "@/config/inngest";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Try sending a simple event to verify keys are working
    const res = await inngest.send({
      name: "test/ping",
      data: { time: Date.now() },
    });

    return NextResponse.json({
      success: true,
      message: "Inngest key working ✅",
      res,
      env: process.env.INNGEST_EVENT_KEY
        ? `Found key (starts with: ${process.env.INNGEST_EVENT_KEY.slice(
            0,
            6
          )}..., ends with: ${process.env.INNGEST_EVENT_KEY.slice(-4)})`
        : "Missing key",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
      env: process.env.INNGEST_EVENT_KEY ? "Found key" : "Missing key",
    });
  }
}
