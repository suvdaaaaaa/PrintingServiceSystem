import { NextRequest, NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { loginUserModel } from '@/services/model/UserModel';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { status: 400, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const loginResult = await loginUserModel(email, password);

    // if (loginResult.status === 200 && loginResult.result) {
    //   const token = sign(
    //     {
    //       email: loginResult.result.email,
    //       password: loginResult.result.password,
    //     },
    //     JWT_SECRET,
    //     { expiresIn: '24h' }
    //   );

    // }

    return NextResponse.json(loginResult, { status: loginResult.status });
  } catch (error) {
    console.error('Login route error:', error);
    return NextResponse.json(
      { status: 500, message: 'Internal server error' },
      { status: 500 }
    );
  }
}