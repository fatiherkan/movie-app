import { Badge } from "@material-ui/core";
import "./SingleContent.css";
import ContentModal from "../ContentModal/imdb";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  imDbRating,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={imDbRating}
        color={imDbRating > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
