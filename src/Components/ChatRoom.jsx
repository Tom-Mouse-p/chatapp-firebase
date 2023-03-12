import React from "react";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatMessage from "./ChatMessages";

export default function ChatRoom() {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("createdAt", "desc"), limit(100));
    const [messages, loading] = useCollectionData(q, { idField: "id" });

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="chat-room">
            {messages &&
                messages
                    .reverse()
                    .map((msg) => (
                        <ChatMessage
                            text={msg.text}
                            uid={msg.uid}
                            photoURL={msg.photoURL}
                        />
                    ))}
        </div>
    );
}
