import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRouts({ children }) {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return <>{children}</>;
    }

    return <Navigate to="/login" />;
}
