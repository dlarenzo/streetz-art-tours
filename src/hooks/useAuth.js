"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebase";
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user && user.uid ? true : false);
      setUser(user);
    });
  });
  return { user, isLoggedIn };
};
export default useAuth;

// "use client";

// import { useEffect, useState } from "react";
// import { auth } from "../firebase";

// const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       setIsLoggedIn(!!authUser && !!authUser.uid);
//       setUser(authUser);
//     });

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   return {
//     auth: auth, // Use the appropriate auth object from firebase
//     user,
//     isLoggedIn,
//   };
// };

// export default useAuth;
