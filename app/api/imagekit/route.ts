import imagekit from "@/lib/imagekit-server";
import { NextResponse } from "next/server";
export async function GET() {
    const response = NextResponse.json(imagekit.getAuthenticationParameters());
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
}
