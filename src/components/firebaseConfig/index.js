import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

function StartFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAhYUaQeJllfCXoqZTxuOhlaYzVhspN98I',
    authDomain: 'capstone-b469c.firebaseapp.com',
    databaseURL:
      'https://capstone-b469c-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'capstone-b469c',
    storageBucket: 'capstone-b469c.appspot.com',
    messagingSenderId: '649424025897',
    appId: '1:649424025897:web:d671e496e36649f2bf1f38',
    measurementId: 'G-2XSQX3FK6R',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return getDatabase(app);
}

export default StartFirebase;
