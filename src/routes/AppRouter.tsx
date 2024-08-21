// import { Route, Router, Routes } from "react-router-dom"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./Account/Login"

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<p>nada</p>}/>
                <Route
                    path="/login"
                    element={
                        <UserLoged>
                            <Login />
                        </UserLoged>
                    }
                />
            </Routes>
        </Router>
    )
}

function UserLoged({children}: {children: JSX.Element}){
    return children;
}