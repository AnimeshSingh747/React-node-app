import React, { useContext, useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState("Mohan das");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

function DisplayUser() {
    const { user } = useContext(UserContext);
    return <h1>User: {user}</h1>;
}

function App() {
    return (
        <UserProvider>
            <DisplayUser />
        </UserProvider>
    );
}

export default App;