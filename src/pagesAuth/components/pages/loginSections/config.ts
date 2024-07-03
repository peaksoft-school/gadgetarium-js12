// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD7CKr9IEp6piaWzYqaKbA2-On3YWyEJvg',
	authDomain: 'gadget-a4211.firebaseapp.com',
	projectId: 'gadget-a4211',
	storageBucket: 'gadget-a4211.appspot.com',
	messagingSenderId: '165901775451',
	appId: '1:165901775451:web:a6a6d511154f94e2a2057e',
	measurementId: 'G-2T5LK4TE31'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, analytics };
