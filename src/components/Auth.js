"use client";
import React from "react";
import {
  singInWithPopup,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { isLoggedIn, user } = useAuth();
  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return <></>;
};

export default Auth;

// "use client";

// import React from "react";
// import { Box, Button, Typography } from "@mui/material";
// import {
//   signInWithPopup,
//   GoogleAuthProvider,
//   User as FirebaseUser,
// } from "firebase/auth"; // Import User alias
// import { FaGoogle } from "react-icons/fa";
// import { auth } from "../firebase";
// import useAuth from "../hooks/index";
// import Link from "next/link";

// const Auth = () => {
//   const { isLoggedIn, user } = useAuth();

//   const handleAuth = async () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential?.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData?.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };

//   return (
//     <Box position="fixed" top="6%" right="2%">
//       {isLoggedIn && (
//         <>
//           <img
//             src={(user as FirebaseUser)?.photoURL ?? ""}
//             alt={(user as FirebaseUser)?.displayName ?? ""}
//           />{" "}
//           {/* Cast user as FirebaseUser */}
//           <Typography color="green">
//             {(user as FirebaseUser)?.email}
//           </Typography>{" "}
//           {/* Cast user as FirebaseUser */}
//           <Link color="red" onClick={() => auth.signOut()} href={"/"}>
//             Logout
//           </Link>
//         </>
//       )}
//       {!isLoggedIn && (
//         <Button
//           startIcon={<FaGoogle />}
//           onClick={handleAuth}
//           variant="contained"
//           color="primary"
//         >
//           Login with Google
//         </Button>
//       )}
//     </Box>
//   );
// };

// export default Auth;
