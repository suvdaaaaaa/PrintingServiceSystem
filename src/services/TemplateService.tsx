const getTemplates = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/template`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getTemplate = async (id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/api/template/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
const createTemplate = async (data: any) => {
  const res = await fetch(`${process.env.BASE_URL}/api/template/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

export { getTemplate, getTemplates, createTemplate };
