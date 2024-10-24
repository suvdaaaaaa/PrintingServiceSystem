import { getUsers } from "@/services/UserService";
import { Box } from "@mui/material";

import { Suspense } from "react";
import UserList from "../components/user/UserList";
type searchParamsProps = {
  query?: string;
  page?: string;
  sector?: string;
  org?: string;
};

const UserPage = async ({
  searchParams,
}: {
  searchParams?: searchParamsProps;
}) => {
  const userData = await getUsers();

  // console.log({userData});
  

  return (
    <div className="container m-auto p-6 indicator_name lg:px-8 indicator_name flex min-h-screen flex-col items-start justify-start ">
      <Box>
        <Suspense fallback={<div>Loading...</div>}>
          <UserList users={userData} />
        </Suspense>
      </Box>
    </div>
  );
};

export default UserPage;
