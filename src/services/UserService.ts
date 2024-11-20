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
  const res = await fetch(`http://localhost:3000/api/authentication/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/authentication/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    return res;
  } catch (error) {
    throw new Error('Login request failed');
  }
};


export { getUser, createUser, getUsers, loginUser  };
