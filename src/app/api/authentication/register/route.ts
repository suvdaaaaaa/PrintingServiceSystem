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

// import { createUserModel } from "@/services/model/UserModel";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const response = await createUserModel(body);

//     // If there is an error or user creation fails
//     if (response.status !== 200) {
//       return NextResponse.json(
//         {
//           data: response.result,
//           error: response.result || "Error occurred during registration",
//           message: response.message || "Error",
//         },
//         { status: response.status || 500 }
//       );
//     }

//     // If user creation is successful
//     return NextResponse.json(
//       {
//         data: response.result,
//         message: response.message || "Registration successful",
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error in POST handler:", error);
//     return NextResponse.json(
//       {
//         error: "Something went wrong during registration",
//         message: "Error",
//       },
//       { status: 500 }
//     );
//   }
// }
