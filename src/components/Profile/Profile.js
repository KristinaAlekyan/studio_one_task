import "../Profile/profile.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userSelector } from "../../redux/userSlice";
import { logout } from "../../redux/userSlice";

function Profile() {
    const user = useSelector(userSelector);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('autorized');
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div >
            <p>Hello {user.username}</p>
            <button onClick={handleLogout}> logout </button>
        </div>
    )
}

export default Profile