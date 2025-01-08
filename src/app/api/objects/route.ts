import Object from "@/libs/models/object";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const data = await Object.find();
    return NextResponse.json({data}, {status: 201});  
}

export async function POST(req: any) {
    const data = await req.body;
    await connectMongoDB();
    await Object.create(data);
    return NextResponse.json({message: "Object created!"}, {status: 201});  
}

export async function DELETE(req: any) {
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Object.findByIdAndDelete(id);
    return NextResponse.json({message: "Object deleted!"}, {status: 200})
}