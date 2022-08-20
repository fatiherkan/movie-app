import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  useEffect( async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=5c60de6deb1603623b1a8394c0cafdd3&page=${page}`
    );



    setContent(prev => [...prev, ...data.results]);
  }, [page]);

  const handleScroll =() => {
    console.log("Height:",document.documentElement.scrollHeight);
    console.log("Top:", document.documentElement.scrollTop);
    console.log("Window:",window.innerHeight);

    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage(prev => prev+1)
    }



  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
   
  }, [])

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending pure-g newSection">
        {content &&
          content.map((c) => (
            <SingleContent
            
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
