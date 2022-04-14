// Import the functions you need from the SDKs you need
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from 'redux/features/userSlice';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'fir-auth-article-e04e4.firebaseapp.com',
  databaseURL: process.env.REAC_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REAC_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REAC_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REAC_APP_FIREBASE_APP_ID,
  measurementId: process.env.REAC_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

export const useLogin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const docs = await getDocs(q);
      if (user) {
        console.log('klik2');
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
        });
        localStorage.setItem('isAuth', true);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/dashboard');
      }
    } catch (err) {
      setErrors(err.message);
      console.error(err);
      alert(err.message);
    }
  };
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          localStorage.setItem('isAuth', true);
          // setIsAuth(true);
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate('/dashboard');
        }
      );

      //   navigate('/dashboard');
    } catch (err) {
      setErrors(err.message);
      console.log(errors);
      alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (err) {
      // setErrors(err.message);
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset link sent!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        dispatch(removeUser());
        navigate('/');
        // window.location.pathname = '/';
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    isAuth,
    setIsAuth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    errors,
  };
};
