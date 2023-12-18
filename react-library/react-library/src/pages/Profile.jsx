import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import "../styles/Profile.css"



const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {

    const fetchUserProfile = async () => {
      if (auth.currentUser) {

        console.log('Current User UID:', auth.currentUser.uid);

        try {
          const userProfileRef = doc(db, 'users', auth.currentUser.uid);
          console.log('User Profile Reference:', userProfileRef);

          const profileDoc = await getDoc(userProfileRef);
          console.log('Profile Document:', profileDoc);

          if (profileDoc.exists()) {
            const profile = profileDoc.data();
            console.log('Fetched Profile:', profile);
            setUserProfile(profile);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {userProfile ? (
        <div>
          <p><strong>Name:</strong> {userProfile.nickname}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>

        </div>
      ) : (
        <p>Loading profile...</p>
      )}

    </div>
  );
};

export default Profile;
