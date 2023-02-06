import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

import LogoutIcon from "@mui/icons-material/Logout";

import FeedbackIcon from "@mui/icons-material/Feedback";


import useMediaQuery from "@mui/material/useMediaQuery";
// const LeftSideBar = () => {
//   const navigate = useNavigate();
//   return (
//     <ul className={styles.leftSideUl}>

//       <li onClick={(e) => navigate("/")}>
//         <DashboardIcon />
//         <small className="d-none d-lg-flex ms-2"> Dashboard</small>
//       </li>
//       <li onClick={(e) => navigate("/user")}>
//         <GroupIcon />
//         <small className="d-none d-lg-flex ms-2"> User</small>
//       </li>
//       <li onClick={(e) => navigate("/notebook")}>
//         <NoteIcon />
//         <small className="d-none d-lg-flex ms-2"> Notebook </small>
//         <div>
//           <ul>
//             <li>hi</li>
//           </ul>
//         </div>
//       </li>
//       <li onClick={(e) => navigate("/tool_noteBook")}>
//         <StickyNote2Icon />
//         <small className="d-none d-lg-flex ms-2"> Tool Notebook</small>
//       </li>
//       <li onClick={(e) => navigate("/use_case")}>
//         <WorkIcon />
//         <small className="d-none d-lg-flex ms-2"> Use Case</small>
//       </li>
//       <li onClick={(e) => navigate("/line_chart")}>
//         <ShowChartIcon />
//         <small className="d-none d-lg-flex ms-2"> Line Chart</small>
//       </li>
//       <li onClick={(e) => navigate("/bar_chart")}>
//         <BarChartIcon />
//         <small className="d-none d-lg-flex ms-2"> Bar Chart</small>
//       </li>
//       <li onClick={(e) => navigate("/map")}>
//         <MapIcon />
//         <small className="d-none d-lg-flex ms-2"> Map</small>
//       </li>
//       <li onClick={(e) => navigate("/logout")}>
//         <LogoutIcon />
//         <small className="d-none d-lg-flex ms-2"> LogOut</small>
//       </li>
//     </ul>
//   );
// };

// export default LeftSideBar;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
// import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

// Recently changed icon

import BookIcon from "@mui/icons-material/Book";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ContactsIcon from "@mui/icons-material/Contacts";
import AddIcon from "@mui/icons-material/Add";
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

//till that

import { Link, NavLink } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function LeftSideBar({ children }) {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = React.useState(largeScreen);
  const [openSubNoteBook, setOpenSubNoteBook] = React.useState(false);

  const [openCollege, setOpenCollege] = React.useState(false);
  const [openGurudwara, setOpenGurudwara] = React.useState(false);
  const [openCommitee, setOpenCommitee] = React.useState(false);
  const [openHukamnama, setOpenHukamnama] = React.useState(false);
  const [openLink,setOpenLinks] = React.useState(false);


 

  



  const handleClickNoteBook = () => {
    setOpenSubNoteBook(!openSubNoteBook);
  };
  const handleClickLinks = () => {
    setOpenLinks(!openLink);
  };
  const handleClickColleges = () => {
    setOpenCollege(!openCollege);
  };

  const handleClickHukamnama = () => {
    setOpenHukamnama(!openHukamnama);
  };

  const handleClickGurudwara = () => {
    setOpenGurudwara(!openGurudwara);
  };

  const handleClickCommitee = () => {
    setOpenCommitee(!openCommitee);
  };

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const classes = {
    activeLink: "activeLink",
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // React.useLayoutEffect(() => {
  //   function updateSize() {
  //     setOpen(largeScreen);
  //   }
  //   window.addEventListener("resize", updateSize);
  //   updateSize();
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);
  return (
    <Box sx={{ display: "flex" }}>
      {/* {largeScreen ? setOpen(true) : setOpen(false)} */}
      <CssBaseline />
      <AppBar position="fixed" open={open && largeScreen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && largeScreen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Gurudwara Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open && largeScreen}>
        <DrawerHeader>
          <img
            className="d-none d-lg-flex"
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              marginLeft: "0%",
              width: "50%",
            }}
            src="/images/logo.png"
            alt="not found"
          />
          <img
            className="d-lg-none"
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              marginLeft: "10%",
              width: "80%",
            }}
            src="/images/logo.png"
            alt="not found"
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Donaties"
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Donaties" />
          </ListItem>

          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Add-Hukamnama"
            onClick={handleClickHukamnama}
          >
            <ListItemIcon>
              {/* <NoteIcon /> */}
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Hukamnama" />
            {openHukamnama ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openHukamnama} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Add-Hukamnama"
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Hukamnama" />
              </ListItem>

              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Hukamnama"
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Hukamnama" />
              </ListItem>
            </List>
          </Collapse>

          
          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/akhand-path-registration"
          >
            <ListItemIcon>
              <InfoSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Akhand Path Booking" />
          </ListItem>

          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/General_Information"
          >
            <ListItemIcon>
              <InfoSharpIcon />
            </ListItemIcon>
            <ListItemText primary="General Information" />
          </ListItem>

          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Add-Events"
            onClick={handleClickNoteBook}
          >
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
            {openSubNoteBook ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubNoteBook} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Add-Events"
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Events " />
              </ListItem>

              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Events"
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Events " />
              </ListItem>
            </List>
          </Collapse>



          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Live_links"
            onClick={handleClickLinks}
          >
            <ListItemIcon>
             
              <ScreenShareIcon />
            </ListItemIcon>
            <ListItemText primary="Live-Links" />
            {/* {openLink ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          {/* <Collapse in={openLink} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Add_live_links"
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Live Link" />
              </ListItem>

              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Live_links"
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Live Links" />
              </ListItem>
            </List>
          </Collapse> */}















          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Add_Colleges"
            onClick={handleClickColleges}
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Colleges" />
            {openCollege ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openCollege} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Add_Colleges"
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Colleges " />
              </ListItem>

              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Colleges"
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Colleges " />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Add_Gurudwara"
            onClick={handleClickGurudwara}
          >
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Gurudwara" />
            {openGurudwara ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openGurudwara} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Add_Gurudwara"
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Gurudwara " />
              </ListItem>

              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Gurudwara"
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Gurudwara " />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/Add_Member"
            onClick={handleClickCommitee}
          >
            <ListItemIcon>
              <CardMembershipIcon />
            </ListItemIcon>
            <ListItemText primary="Members" />
            {openCommitee ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openCommitee} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Add_Member"
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Member " />
              </ListItem>

              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/Member"
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Member" />
              </ListItem>
            </List>
          </Collapse>

          {/* <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/use_case"
            onClick={handleClickUseCase}
          >
            <ListItemIcon>
              <MuseumIcon />
            </ListItemIcon>
            <ListItemText primary="Use Case" />
            {openSubUseCase ? <ExpandLess /> : <ExpandMore />}
          </ListItem> */}
          {/* <Collapse in={openSubUseCase} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/use_case"
              >
                
                <ListItemText primary="all Use Case " />
              </ListItem>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/unapproved_use_case"
              >
              
                <ListItemText primary="Unapproved" />
              </ListItem>
            </List>
          </Collapse> */}

          {/* <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/outreachy"
            onClick={handleClickOutreachy}
          >
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText primary="Outreachy" />
            {openSubOutreachy ? <ExpandLess /> : <ExpandMore />}
          </ListItem> */}
          {/* <Collapse in={openSubOutreachy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/outreachy"
              >
               
                <ListItemText primary="Outreachy" />
              </ListItem>
              <ListItem
                sx={{ pl: 3, color: "#000" }}
                component={NavLink}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
                to="/mile_upload"
              >
               
                <ListItemText primary="Upload Image " />
              </ListItem>
            </List>
          </Collapse> */}
          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/contact_details"
          >
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Details" />
          </ListItem>
          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/feedback"
          >
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItem>
          <ListItem
            component={NavLink}
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            sx={{ color: "#000" }}
            to="/logout"
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <DrawerHeader />
        <Typography>{children}</Typography>
      </Box>
    </Box>
  );
}
