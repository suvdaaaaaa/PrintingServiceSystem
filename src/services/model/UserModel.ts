import { IUser } from "@/interfaces/IUser";
import prisma from "@/utils/prisma";

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
    const orgList = await prisma.user.findUnique({
      select: {
        user_id: true,
        fname: true,
      },
      where: {
        user_id: id,
      },
    });

    return orgList;
  } catch (error) {
    console.error("Error in getUserByIdModel:", error);
    throw new Error("Failed to fetch user one");
  }
};
export const createUserModel = async (data: IUser) => {
  const { user_id, fname, lname, email, phone, password, address, role } = data;

  const now = new Date();
  const created_date = now.toISOString();
  const updated_date = now.toISOString();

  try {
    const organization = await prisma.user.create({
      data: {
        user_id,
        fname,
        lname,
        email,
        phone,
        password,
        address,
        role,
        //created_date,
        //updated_date,
      },
    });
    return organization;
  } catch (error) {
    console.error("Error in createUserModel:", error);
    throw new Error("Failed to fetch create user");
  }
};
