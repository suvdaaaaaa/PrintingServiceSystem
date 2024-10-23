
import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Avatar
} from "@mui/material";
import { Stack } from "@mui/system";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const ecoCard = [
  {
    title: "Нэрийн хуудас",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    price: 345,
  },

  {
    title: "Нэрийн хуудас",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    price: 345,
  },

  {
    title: "Нэрийн хуудас",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    price: 345,
  },
    {
    title: "Нэрийн хуудас",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    price: 345,
  },

  {
    title: "Нэрийн хуудас",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    price: 345,
  },

  {
    title: "Нэрийн хуудас",
    subheader: "September 14, 2023",
    photo: '/images/products/s11.jpg',
    price: 345,
  },
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item xs={12} md={3} lg={4} key={index}>
          <BlankCard>
            <Typography component={Link} href="/">
              <Avatar
                src={product.photo} variant="square"
                sx={{
                  height: 230,
                  width: '100%',
                }}
                
              />
            </Typography>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
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
      ))}
    </Grid>
  );
};

export default Blog;
