import "../SingleNews/singleNews.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { newsSelector } from "../../redux/newsSlice";

function SingleNews() {
    const { news } = useSelector(newsSelector)

    const id = useParams().id;

    const singleNews = news.filter(item => item.id === Number(id))[0]

    return (
        <div className="cardSingle" >
            <div className="cardImage">
                <img src={singleNews.image} alt="AAA" />
            </div>
            <h5>{singleNews.title}</h5>
            <p className="price">{singleNews.description}</p>
        </div>
    )
}

export default SingleNews