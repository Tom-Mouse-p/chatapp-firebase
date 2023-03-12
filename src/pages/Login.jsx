import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
// import LoginPage from "../Components/LoginPage";
import { auth } from "../firebase";

export default function Login() {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

    const [user] = useAuthState(auth);

    if (error) {
        console.log(error);
    }

    if (user) {
        return <Navigate to="/chat" />;
    }

    if (loading) {
        return (
            <div className="main">
                <p>Loading...</p>
            </div>
        );
    }
    return (
        <div className="main">
            <h1 className="title">
                Welcome to <span className="text-lemon">ChatX</span>
            </h1>
            <p className="mb-2">Want to get started?</p>
            <button
                onClick={() => signInWithGoogle()}
                className="primary-button"
            >
                Sign In With
                <img src="/google.svg" alt="google" className="google-icon" />
            </button>
        </div>
    );
}
