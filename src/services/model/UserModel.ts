import { IUser } from "@/interfaces/IUser";
import prisma from "@/utils/prisma";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";
import * as bcrypt from "bcryptjs";

export const getUsersModel = async () => {
  try {
    const users = await prisma.user.findMany({});
    return users;
  } catch (error) {
    console.error("Error in get users model:", error);
    throw new Error("Failed to fetch users");
  }
};

export const getUserByIdModel = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      select: {
        user_id: true,
      },
      where: {
        user_id: id,
      },
    });

    return user;
  } catch (error) {
    console.error("Error in getUserByIdModel:", error);
    throw new Error("Failed to fetch user one");
  }
};

export const createUserModel = async (data: IUser) => {
  const { user_id, fname, lname, email, phone, password, address, role } = data;

  console.log("data", data);

  const hashedPassword = await hash(password, 10);

  const now = new Date();
  const created_date = now.toISOString();
  const updated_date = now.toISOString();

  const userCheck = await prisma.user.findUnique({
    select: {
      email: true,
    },
    where: {
      email,
    },
  });

  if (userCheck) {
    return {
      status: 409,
      message: "Error",
      result: "Бүртгэлтэй хэрэглэгч байна",
    };
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        // user_id,
        fname,
        lname,
        email,
        phone,
        password: hashedPassword,
        address,
        role,
        // created_date,
        // updated_date,
      },
    });

    console.log("newUser", newUser);
    
    return {
      status: 200,
      message: "Амжилттай бүртгэгдлээ",
      result: newUser,
    };
  } catch (error) {
    console.error("Error in createUserModel:", error);

    return {
      status: 500,
      message: "Server error",
      result: error.message,
    };
  }
};

export const loginUserModel = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      select: {
        user_id: true,
        fname: true,
        email: true,
        phone: true,
        role: true,
        password: true,
      },
      where: {
        email,
      },
    });

    if (!user) {
      return {
        status: 404,
        message: "User not found",
        result: null,
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        status: 401,
        message: "Invalid credentials",
        result: null,
      };
    }

    const { password: _, ...userData } = user;
    return {
      status: 200,
      message: "Login successful",
      result: userData,
    };
  } catch (error) {
    console.error("Error in loginUserModel:", error);
    return {
      status: 500,
      message: "Failed to login",
      result: null,
    };
  }
};


