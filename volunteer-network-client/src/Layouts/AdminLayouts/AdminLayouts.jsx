import { Grid } from "@mui/material";
import AdminAsideNav from "../../components/adminPages/AdminAsideNav/AddminAsideNav";
import { Outlet } from "react-router-dom";

const AdminLayouts = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <AdminAsideNav></AdminAsideNav>
        </Grid>
        <Grid item xs={6} md={8}>
          <div className="">
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminLayouts;
