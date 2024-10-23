'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Blog from './components/dashboard/Blog';
// components


const Dashboard = () => {
  return (
    <PageContainer title="Templates">
      <Box>
          <Grid item xs={12}>
            <Blog />
          </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
