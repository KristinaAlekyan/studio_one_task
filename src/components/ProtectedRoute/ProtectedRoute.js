import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAuth = localStorage.getItem("authorized")

    if (!isAuth) {
        return <Navigate to="/login" replace={true} />
    }
    return children
}

export default ProtectedRoute