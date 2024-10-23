import { getTemplateByIdModel } from "@/services/model/TemplateModel";
import { NextResponse } from "next/server";
type Props = {
  params: {
    id: number;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const uid = Number(id);

  const dt = await getTemplateByIdModel(uid);

  return NextResponse.json(dt);
}
