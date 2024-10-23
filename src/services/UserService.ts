const getUsers = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/user`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getUser = async (id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/api/user/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
const createUser = async (data: any) => {
  const res = await fetch(`${process.env.BASE_URL}/api/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};


export { getUser, createUser, getUsers  };
