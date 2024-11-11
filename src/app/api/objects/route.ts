import Object from "@/libs/models/object";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    
    return Response.json(null);
    
}

export async function POST(req: any) {
    const data = await req.body;
    await connectMongoDB();
    await Object.create(data);
    return NextResponse.json({message: "Object created!"}, {status: 201});
    
}