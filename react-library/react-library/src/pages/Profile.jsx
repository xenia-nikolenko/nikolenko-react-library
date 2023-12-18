import React, { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import "../styles/Profile.css";

/* eslint-disable react/prop-types */
const Profile = ({ authUser }) => {
  const [userProfile, setUserProfile] = useState(null);
  console.log("==> AUTH from PROFILE:", authUser);

  useEffect(() => {
    /* ************************  */
    //getDocs(collection(db, "users")).then((qs) => {
    //    qs.forEach(q => {console.log(q.id, q)});
    //});
    /* ************************  */
    console.log("Current User:", authUser);
    //console.log("Current User UID:", authUser.uid);


    async function getProfile(userProfileRef) {
      const profileDoc = await getDoc(userProfileRef);
      console.log("Profile Document:", profileDoc);

      if (profileDoc.exists()) {
        const profile = profileDoc.data();
        console.log("Fetched Profile:", profile);
        setUserProfile(profile);
      } else {
        console.log("No such document!");
      }
    }

    //if (authUser?.currentUser) {
    if (authUser) {
      console.log("Current User UID:", authUser.uid);

      try {
        const userProfileRef = doc(db, "users", authUser.uid);
        //const userProfileRef = doc(db, "users", "CrgATu76HChFxHvkA3EeBHFv8k63"); // yves@zioup.com
        // const userProfileRef = doc(db, "users", "MfHepgekvJMXLRGHTn9KDj8YXqc2"); // tester@gmail.com
        // const userProfileRef = doc(db, "users", "SyTdWGEC6jmBgxg4wgBo"); // WORKING - WHERE IS THIS COMING FROM?
        // yves02: nmjJNjAAE9cBh5deOCJ0
        // const userProfileRef = doc(db, "users", "nmjJNjAAE9cBh5deOCJ0");
        // yves03: user uid: E8Ea1DXJkPaLAfdvz9bMRVdOMM82
          // yves1446. uid: zZtnULqTnnY4w6p8IK6CHjZLkmT2
        console.log("User Profile Reference:", userProfileRef);

        // you cannot have await in useEffect
        getProfile(userProfileRef);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }

    // Where is this coming from?
    // fetchUserProfile();
  }, [authUser]);

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {userProfile ? (
        <div>
          <p>
            <strong>Name:</strong> {userProfile.nickname}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
