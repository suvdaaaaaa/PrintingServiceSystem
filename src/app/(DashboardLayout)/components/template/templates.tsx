import React from "react";
import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Avatar
} from "@mui/material";
import { Stack } from "@mui/system";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import { ITemplate } from "@/interfaces/ITemplate";
import DashboardCard from "../shared/DashboardCard";

const TemplateList = ({ temp }: { temp: ITemplate[] }) => {
  // console.log({temp});
  
  return (
    <DashboardCard title="Нэрийн хуудасны загварууд">
      <Grid container spacing={3}>
        {temp && temp.length > 0 ? (
          temp.map((product) => (
            <Grid item xs={12} md={3} lg={4} key={product.template_id}>
              <BlankCard>
                <Avatar
                  src={product.image_url}
                  alt={product.template_name}
                  variant="square"
                  sx={{
                    height: 230,
                    width: '100%',
                  }}
                />
                <CardContent sx={{ p: 3, pt: 2 }}>
                <Link href={`/templates/${product.template_id}`}> 
                  <Typography variant="h6">{product.template_name}</Typography>
                </Link>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={1}
                  >
                    <Stack direction="row" alignItems="center">
                      <Typography variant="h6">${product.price}</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </BlankCard>
            </Grid>
          ))
        ) : (
          <Typography>Бэлэн загвар байхгүй байна.</Typography>
        )}
      </Grid>
    </DashboardCard>
  );
};

export default TemplateList;
