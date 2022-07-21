import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../Profile/profile.css";
import { logout } from "../../redux/userSlice";

function Profile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('authorized');
        localStorage.removeItem('username');
        dispatch(logout())
        navigate('/login')
        //reload I wrote because when I didn't write, it didn't update at once, it couldn't read from localstorige
        window.location.reload()
    }

    return (
        <div >
            <h1>Profile page</h1>
            <h2>Hello {localStorage.getItem("username")}</h2>
            <button onClick={handleLogout}> logout </button>
        </div>
    )
}

export default Profile