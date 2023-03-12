import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import ChatRoom from "../Components/ChatRoom";
import { auth } from "../firebase";
import Form from "./Form";

export default function Chat() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    console.log(user);

    function navigateToAccountHandler() {
        navigate("/account");
    }

    return (
        <div className="main">
            <div className="header">
                <p className="text-xl font-semibold">
                    It's me{" "}
                    <span className="text-lemon font-semibold">
                        {user.displayName}! ❄️🙂
                    </span>
                </p>
                <div className="flex gap-x-3">
                    <button
                        className="secondary-button"
                        onClick={navigateToAccountHandler}
                    >
                        Account
                    </button>
                    <button
                        className="primary-button"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            <ChatRoom />
            <Form />
        </div>
    );
}
