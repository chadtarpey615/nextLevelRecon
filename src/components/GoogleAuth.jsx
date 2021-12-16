import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

const GoogleAuth = () => {
    const navigate = useNavigate();

    const googleClick = async () => {
        try {
            const auth = getAuth();

            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(userRef);

            if (!docSnap.exists()) {
                await setDoc(doc(db, "users", user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }

            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mt-5">
            {/* location.pathname for ternary */}

            <button className="text-success" onClick={googleClick}>
                {" "}
                Sign in With GOOGLE
            </button>
        </div>
    );
};

export default GoogleAuth;
