import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getMovie } from "../Redux/actions";
import { Button } from "react-bootstrap";
const MovieCard = ({ Title, Src, Description, Rating }) => {
  const dispatch = useDispatch();
  const [seeMore, setSeeMore] = useState(false);
  const handleClick = () => {
    dispatch(getMovie(Title));
  };

  return (
    <div className="card-movie">
      <Card className="bg-dark text-white">
        <Card.Img src={Src} alt={Title} />
        <Card.ImgOverlay>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            {Description.length > 150 ? (
              <div>
                {Description.slice(0, `${seeMore ? Description.length : 150}`)}
                <span className="see-more" onClick={() => setSeeMore(!seeMore)}>
                  {seeMore ? " ...see less" : " ...see more"}
                </span>
              </div>
            ) : (
              Description
            )}
          </Card.Text>
          <Card.Text className="rating">
            Rating :
            {[...Array(Rating)].map((e, i) => (
              <BsStarFill key={i} />
            ))}
          </Card.Text>
          <Link to={"/movie/" + Title}>
            <Button onClick={handleClick}>Watch</Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default MovieCard;
