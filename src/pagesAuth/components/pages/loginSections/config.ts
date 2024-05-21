import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyALCK7VNyZmbM0sRvF-4CvxLQ1KT_1lh88',
	authDomain: 'auth-with-c4925.firebaseapp.com',
	projectId: 'auth-with-c4925',
	storageBucket: 'auth-with-c4925.appspot.com',
	messagingSenderId: '697077325821',
	appId: '1:697077325821:web:6a0af274b4b4fa7aee0394',
	measurementId: 'G-H4NY17G5F9'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
