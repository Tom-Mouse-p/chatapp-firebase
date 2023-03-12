import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <h1 className="">
                Chat<span className="text-lg">X</span>
            </h1>
            <button
                className="primary-button"
                onClick={() => {
                    navigate("/login");
                }}
            >
                Start Chatting
            </button>
        </div>
    );
}
