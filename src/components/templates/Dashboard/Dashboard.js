import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from 'helpers/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useUserAuth } from 'context/UserAuthContext';
import axios from 'axios';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { logout } = useUserAuth();
  // console.log(logout);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return null;
    if (!user) return navigate('/');
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((data) => console.log(data));
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      Logged in as
      <div>{name}</div>
      <div>{user?.email}</div>
      <button onClick={logout}>Logout</button>
      <Link to="/dashboard/add">Create post</Link>
    </div>
  );
};
export default Dashboard;
