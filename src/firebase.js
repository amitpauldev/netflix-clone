import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);

		const user = res.user;

		await setDoc(doc(db, "users", user.uid), {
			uid: user.uid,
			name,
			email,
			authProvider: "local",
		});

		return user;
	} catch (error) {
		console.error("Full error:", error.message);
		throw error;
	}
};

const logIn = async (email, password) => {
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		return res.user;
	} catch (error) {
		console.error("Full error:", error.message);
		throw error;
	}
};

const logOut = () => {
	signOut(auth);
};

export { auth, db, signUp, logIn, logOut };
