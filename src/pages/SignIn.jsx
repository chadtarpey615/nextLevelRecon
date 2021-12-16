import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [formData, setFormdata] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

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

            const userInfo = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            if (userInfo.user) {
                navigate("/home");
            }
        } catch (error) {}
    };
    return (
        <form className="grid w-100 justify-center w-full" onSubmit={onSubmit}>
            <h1 className="text-center text-3xl mt-20"> Sign In</h1>

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
                Sign In
            </button>
            <Link className="mt-10" to="/sign-up">
                Don't have an account? Sign up here
            </Link>
            <Link className="mt-3" to="/forgot-password">
                Forgot Password?
            </Link>
        </form>
    );
};

export default SignIn;
