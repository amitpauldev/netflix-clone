import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAG95HV6BcMk-1X9DxiXpDmrjpHM5liZkI",
	authDomain: "netfix-clone-a9fda.firebaseapp.com",
	projectId: "netfix-clone-a9fda",
	storageBucket: "netfix-clone-a9fda.firebasestorage.app",
	messagingSenderId: "82322719252",
	appId: "1:82322719252:web:d8e7f99d51c5a537b99d01",
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
