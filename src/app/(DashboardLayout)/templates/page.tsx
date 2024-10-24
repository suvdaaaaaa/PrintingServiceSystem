import TemplateList from "../components/template/templates";
import { getTemplates } from "@/services/TemplateService";
import { Box } from "@mui/material";

import { Suspense } from "react";
type searchParamsProps = {
  query?: string;
  page?: string;
  sector?: string;
  org?: string;
};

const TemplatePage = async ({
  searchParams,
}: {
  searchParams?: searchParamsProps;
}) => {
  const tempData = await getTemplates();

  // console.log({tempData});
  

  return (
      <Box>
        <Suspense fallback={<div>Loading...</div>}>
          <TemplateList temp={tempData} />
        </Suspense>
      </Box>
  );
};

export default TemplatePage;
