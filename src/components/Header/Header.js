import "../Header/header.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userSelector } from "../../redux/userSlice";


function Header({ value, onChange }) {

    const user = useSelector(userSelector);

    return (
        <div className="d-flex flex-row justify-content-between ">
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>

                    <li>
                        <input className="search"
                            type="text"
                            onChange={onChange}
                            placeholder="Search..."
                            value={value}
                        />
                    </li>
                </ul>
            </div>
            {!user ?
                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"> Login </Link>
                        </li>
                    </ul>
                </div> : <></>
            }
        </div>
    )
}

export default Header