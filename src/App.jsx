import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import PrivateRoutes from "./pages/PrivateRoutes";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/account"
                element={
                    <PrivateRoutes>
                        <Account />
                    </PrivateRoutes>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route
                path="/chat"
                element={
                    <PrivateRoutes>
                        <Chat />
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
}

export default App;
