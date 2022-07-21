import { useSelector } from "react-redux";

import "../News/news.css";
import NewsItem from "../NewsItem/NewsItem";
import { newsSelector } from "../../redux/newsSlice";

function News({ searchString, sortType }) {
    const { news } = useSelector(newsSelector)

    let filteredData = news;

    if (sortType === "asc") {
        filteredData = [...filteredData].sort((a, b) =>
            a.title > b.title ? 1 : -1,
        );
    } else if (sortType === "desc") {
        filteredData = [...filteredData].sort((a, b) =>
            a.title < b.title ? 1 : -1,
        );
    } else if (sortType === "") {
        filteredData = news
    }

    if (searchString) {
        filteredData = filteredData.filter(element => element.title.toLowerCase().includes(searchString.toLowerCase()))
    }

    return (
        <div className="newsContainer">
            {filteredData.map(item =>
                <NewsItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            )}
        </div>
    )
}

export default News