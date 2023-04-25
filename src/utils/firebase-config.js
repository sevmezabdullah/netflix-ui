import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyArg-2unRTmnLZszYw6fHIt00fzX8A6-zs',
  authDomain: 'netflix-clone-11efe.firebaseapp.com',
  projectId: 'netflix-clone-11efe',
  storageBucket: 'netflix-clone-11efe.appspot.com',
  messagingSenderId: '541235653968',
  appId: '1:541235653968:web:e3cd6dffb606f088bcd055',
  measurementId: 'G-805MK3E79T',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
