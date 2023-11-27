import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Add, PeopleAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AdminAsideNav = () => {
  const [header, setHeader] = React.useState("Volunteer register list");

  const handleChangingHeader = () => {
    if (window.location.href === "http://localhost:5173/admin") {
      setHeader("Volunteer register list");
    } else if (
      window.location.href === "http://localhost:5173/admin/add-volunteer"
    ) {
      setHeader("Add event");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
            {header}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <img
          src="/logo.png"
          style={{
            width: "50%",
            margin: "0 auto",
            marginTop: "-2.5rem",
            paddingBottom: "1rem",
          }}
          alt=""
        />
        <Divider />
        <List>
          {["Volunteer register list", "Add event"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link
                to={index % 2 === 0 ? "/admin" : "/admin/add-volunteer"}
                onClick={handleChangingHeader}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <PeopleAltOutlined /> : <Add />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};
export default AdminAsideNav;
