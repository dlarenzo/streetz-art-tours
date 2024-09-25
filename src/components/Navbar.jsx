"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Tours",
    path: "/tours",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isLoggedIn, user } = useAuth();

  return (
    <nav className="flex items-center w-full px-2 py-10 bg-white border-black border-b-4 text-slate-950 ">
      <div className="flex-1 w-14 font-bold">
        <p className="text-2xl tracking-wide pl-8">STREET ARTZ TOURS</p>
      </div>
      <div className="mobile-menu block lg:hidden pr-10">
        {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)}>
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button onClick={() => setNavbarOpen(false)}>
            <XMarkIcon className="h5 w-5" />
          </button>
        )}
      </div>
      <div className=" flex-2 menu hidden lg:block lg:w-auto" id="navbar">
        <ul className="flex justify-end gap-x-8 flex-1 w-64 text-base font-light pr-8">
          {isLoggedIn && (
            <div className="flex">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
              <button
                className=" text-black font-light px-2.5 flex items-center border-black border-2 hover:bg-black hover:text-white "
                variant="contained"
                color="secondary"
                onClick={() => auth.signOut()}
              >
                <span className="pl-">Logout</span>
              </button>
            </div>
          )}
          {!isLoggedIn && (
            <button
              className=" text-black font-light px-2.5 flex items-center border-black border-2 hover:bg-black hover:text-white "
              variant="contained"
              color="secondary"
              onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
            >
              <FaGoogle /> <span className="pl-2">Login</span>
            </button>
          )}
        </ul>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import useAuth from "@/hooks";
// import { auth } from "@/firebase";
// import {
//   signInWithPopup,
//   GoogleAuthProvider,
//   User as FirebaseUser,
// } from "firebase/auth";
// import { FaUser } from "react-icons/fa";

// const ResponsiveAppBar = () => {
//   const pages = [
//     { title: "Read", href: "/posts" },
//     { title: "Tutorials", href: "/tutorials" },
//     { title: "Discuss", href: "/forums" },
//     { title: "Contact", href: "/contact" },
//   ];

//   const settings = [
//     {
//       name: "Home",
//       href: "/profile",
//     },
//     {
//       name: "Account",
//       href: "/account",
//     },
//     {
//       name: "Dashboard",
//       href: "/dashboard",
//     },
//     {
//       name: "Logout",
//       onClick: () => {
//         auth.signOut();
//         handleCloseUserMenu();
//       },
//     },
//   ];

//   const router = useRouter();

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleNavigation = (href, onClick) => {
//     if (href) {
//       router.push(href);
//       console.log("Navigating to: ", href);
//     }
//     if (onClick) {
//       onClick();
//     }
//   };

//   const { isLoggedIn, user } = useAuth();

//   return (
//     <AppBar position="fixed">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="secondary"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem
//                   key={page.href}
//                   onClick={() => handleNavigation(page.href, undefined)}
//                 >
//                   <Typography textAlign="center">{page.title}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page.title}
//                 onClick={() => handleNavigation(page.href, undefined)}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page.title}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             {isLoggedIn ? (
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar
//                     alt={(user as FirebaseUser)?.displayName ?? ""}
//                     src={(user as FirebaseUser)?.photoURL ?? ""}
//                   />
//                 </IconButton>
//               </Tooltip>
//             ) : (
// {/* <Button
//   variant="contained"
//   color="secondary"
//   onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
//   endIcon={<FaUser />}
// >
//   Login with Google
// </Button>; */}
//             )}
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem
//                   key={setting.name}
//                   onClick={() =>
//                     handleNavigation(setting.href, setting.onClick)
//                   }
//                 >
//                   <Typography textAlign="center">{setting.name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default ResponsiveAppBar;
