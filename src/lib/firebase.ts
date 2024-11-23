import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAizaht887ekEOxGPTQSZ5LPMMy1cyoc4U",
  authDomain: "coinpanions-d5a06.firebaseapp.com",
  projectId: "coinpanions-d5a06",
  storageBucket: "coinpanions-d5a06.firebasestorage.app",
  messagingSenderId: "791818572740",
  appId: "1:791818572740:web:e1ec53fcb4809b5137ca91",
  measurementId: "G-H405MZZXR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics conditionally
let analytics = null;
isSupported().then(yes => {
  if (yes) analytics = getAnalytics(app);
});

export { 
  app, 
  auth, 
  db, 
  analytics, 
  googleProvider, 
  githubProvider 
};