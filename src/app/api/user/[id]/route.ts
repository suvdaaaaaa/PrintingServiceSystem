import { getUserByIdModel } from "@/services/model/UserModel";
import { NextResponse } from "next/server";
type Props = {
  params: {
    id: number;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const uid = Number(id);

  const dt = await getUserByIdModel(uid);

  return NextResponse.json(dt);
}
