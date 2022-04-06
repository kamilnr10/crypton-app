import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser } from 'redux/features/userSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useLogin } from 'helpers/firebase';

const More = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const { logout } = useLogin();

  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert('An error occured while fetching user data');
  //   }
  // };

  return (
    <div>
      <h1>Welcome</h1>

      <button onClick={logout}>Log out from {email}</button>
    </div>
  );
};

export default More;
