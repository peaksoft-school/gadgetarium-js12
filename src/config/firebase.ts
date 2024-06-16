import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD7CKr9IEp6piaWzYqaKbA2-On3YWyEJvg',
	authDomain: 'gadget-a4211.firebaseapp.com',
	projectId: 'gadget-a4211',
	storageBucket: 'gadget-a4211.appspot.com',
	messagingSenderId: '165901775451',
	appId: '1:165901775451:web:a6a6d511154f94e2a2057e',
	measurementId: 'G-2T5LK4TE31'
};
const app = initializeApp(firebaseConfig, 'gadget');
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
