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

const TemplateList = ({ temp }: { temp: ITemplate[] }) => {
  return (
    <Grid container spacing={3}>
       {temp && temp.length > 0 ? (
        temp.map((product) => (
          <Grid item xs={12} md={3} lg={4} key={product.template_id}>
            <BlankCard>
              <Typography component={Link} href="/">
                <Avatar
                  // src={product.photo}
                  alt={product.template_name}
                  variant="square"
                  sx={{
                    height: 230,
                    width: '100%',
                  }}
                />
              </Typography>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h6">{product.template_name}</Typography>
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
  );
};

export default TemplateList;
