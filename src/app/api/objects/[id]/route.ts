import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Object from "@/libs/models/object";

export async function PUT(req: any, { params }: any) {
    const { id } = params;
    const data = await req.json();
    await connectMongoDB();
    await Object.findByIdAndUpdate(id, data);
    return NextResponse.json({message: "Object updated!"}, {status: 200})

}
export async function GET(req: any, { params }: any) {
    const { id } = params;
    await connectMongoDB();
    const data = await Object.findById({_id: id})
    return NextResponse.json({data}, {status: 200})
    
}