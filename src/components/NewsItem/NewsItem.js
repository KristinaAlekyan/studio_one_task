import { useNavigate } from "react-router-dom";

import "../NewsItem/newsItem.css";

function NewsItem({ id, image, title, description }) {

    const navigate = useNavigate();

    return (
        <div className="card" >
            <div className="cardImage">
                <img src={image} alt="AAA" />
            </div>
            <h5>{title}</h5>
            <p className="price">{description}</p>
            <button onClick={() => navigate(`/news/${id}`)} >View</button>
        </div>
    )
}

export default NewsItem