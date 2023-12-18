import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { NavLink } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
 
  return (
    <div>

      {authUser ? (
        <>
          {`Welcome, ${authUser.email} `}
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <a href="/signin">Signed In</a>
      )}
    </div>
  );
};

export default AuthDetails;