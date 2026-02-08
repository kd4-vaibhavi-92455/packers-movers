import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  BookOnline,
  People,
  LocalShipping,
  AttachMoney,
  BarChart,
  Settings,
  Notifications,
  //   AccountCircle,
} from "@mui/icons-material";
import { Link } from "react-router";

const MenuItems = () => {
  const [open, setOpen] = useState({
    bookings: false,
    customers: false,
    drivers: false,
    vehicles: false,
    payments: false,
    settings: false,
  });

  return (
    <List>
      {/* Dashboard */}
      <ListItemButton component={Link} to="/dashboard">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="go to Dashboard" />
      </ListItemButton>

      {/* Bookings */}
      <ListItemButton
        onClick={() =>
          setOpen((prev) => ({ ...prev, bookings: !prev.bookings }))
        }
      >
        <ListItemIcon>
          <BookOnline />
        </ListItemIcon>
        <ListItemText primary="Bookings" />
        {open.bookings ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.bookings} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/bookings">
            <ListItemText primary="All Bookings" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/add-booking">
            <ListItemText primary="Add Booking" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Customers */}
      <ListItemButton
        onClick={() =>
          setOpen((prev) => ({ ...prev, customers: !prev.customers }))
        }
      >
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
        {open.customers ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.customers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/customers">
            <ListItemText primary="All Customers" />
          </ListItemButton> */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/customers">
            <ListItemText primary="Customers" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Drivers */}
      <ListItemButton
        onClick={() => setOpen((prev) => ({ ...prev, drivers: !prev.drivers }))}
      >
        <ListItemIcon>
          <LocalShipping />
        </ListItemIcon>
        <ListItemText primary="Drivers" />
        {open.drivers ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.drivers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/drivers">
            <ListItemText primary="All Drivers" />
          </ListItemButton>
          {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/add-driver">
            <ListItemText primary="Add Driver" />
          </ListItemButton> */}
        </List>
      </Collapse>

      {/* Vehicles */}
      <ListItemButton
        onClick={() =>
          setOpen((prev) => ({ ...prev, vehicles: !prev.vehicles }))
        }
      >
        <ListItemIcon>
          <LocalShipping />
        </ListItemIcon>
        <ListItemText primary="Vehicles" />
        {open.vehicles ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.vehicles} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vehicles">
            <ListItemText primary="All Vehicles" />
          </ListItemButton>
          {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/add-vehicle">
            <ListItemText primary="Add Vehicle" />
          </ListItemButton> */}
        </List>
      </Collapse>

      {/* Payments */}
      <ListItemButton
        onClick={() =>
          setOpen((prev) => ({ ...prev, payments: !prev.payments }))
        }
      >
        <ListItemIcon>
          <AttachMoney />
        </ListItemIcon>
        <ListItemText primary="Payments" />
        {open.payments ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.payments} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/payments">
            <ListItemText primary="All Payments" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/add-payment">
            <ListItemText primary="Add Payment" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Reports */}
      <ListItemButton component={Link} to="/reports">
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>

      {/* Notifications */}
      <ListItemButton component={Link} to="/notifications">
        <ListItemIcon>
          <Notifications />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>

      {/* Settings */}
      <ListItemButton
        onClick={() =>
          setOpen((prev) => ({ ...prev, settings: !prev.settings }))
        }
      >
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open.settings ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.settings} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/preferences">
            <ListItemText primary="Preferences" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/settings">
            <ListItemText primary="System Settings" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default MenuItems;
