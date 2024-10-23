import { createUserModel } from "@/services/model/UserModel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const dt: any = await createUserModel(body);

  if (!dt) {
    return NextResponse.json({
      data: dt,
      error: "Хадгалахад алдаа гарлаа",
      message: "error",
    });
  } else {
    return NextResponse.json({
      data: dt,
      message: "Амжилттай хадгаллаа",
    });
  }
}
