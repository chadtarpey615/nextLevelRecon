import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import GoogleAuth from "../components/GoogleAuth";
import { db } from "../firebase.config";

const SignUp = () => {
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormdata((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();

            const userInfo = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userInfo.user;

            updateProfile(auth.currentUser, {
                displayName: name,
            });

            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            await setDoc(doc(db, "users", user.uid), formDataCopy);

            navigate("/home");
        } catch (error) {}
    };
    return (
        <form className="grid w-100 justify-center w-full" onSubmit={onSubmit}>
            <h1 className="text-center text-3xl mt-20"> Create A Account</h1>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-success input-bordered "
                    onChange={onChange}
                    value={name}
                    id="name"
                />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-success input-bordered "
                    onChange={onChange}
                    value={email}
                    id="email"
                />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="text"
                    placeholder="Password"
                    className="input input-success input-bordered "
                    onChange={onChange}
                    value={password}
                    id="password"
                />
            </div>
            <button className="btn btn-wide btn-lg btn-success mt-6">
                Sign Up
            </button>

            <GoogleAuth />
            <Link className="mt-5" to="/sign-in">
                Already have an account?
            </Link>
        </form>
    );
};

export default SignUp;
