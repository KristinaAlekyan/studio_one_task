import "../Header/header.css";

import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ value, onChange, setSortType }) {
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
                    {localStorage.getItem("authorized") ? <li className="nav-item">
                        <Link className="nav-link" to="/profile">profile</Link>
                    </li> : <></>}

                    <li>
                        <input className="search"
                            type="text"
                            onChange={onChange}
                            placeholder="Search..."
                            value={value}
                        />
                    </li>
                    <li>
                        <button onClick={() => setSortType("asc")}><span><BsFillArrowUpCircleFill /></span></button>
                        <button onClick={() => setSortType("desc")}><span><BsFillArrowDownCircleFill /></span></button>
                        <button onClick={() => setSortType("")}>X</button>
                    </li>

                </ul>
            </div>
            {!localStorage.getItem('authorized') ?
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