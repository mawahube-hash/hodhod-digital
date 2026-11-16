import { NextResponse } from "next/server";
import { smartAICall } from "@/lib/ai-router";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const prompt = searchParams.get("prompt") || "مرحباً، عرف نفسك وبأي نموذج أنت تعمل باختصار شديد باللغة العربية.";
    
    const result = await smartAICall(prompt);
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
