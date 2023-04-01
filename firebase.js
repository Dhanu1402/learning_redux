import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCGon_uF2gi8ThpeeDdPnW9OTjb5u4-vAo',
  authDomain: 'learning-redux-679ce.firebaseapp.com',
  projectId: 'learning-redux-679ce',
  storageBucket: 'learning-redux-679ce.appspot.com',
  messagingSenderId: '1018914864876',
  appId: '1:1018914864876:web:5833785d30af2e82542fc9',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
