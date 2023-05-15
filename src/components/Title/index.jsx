import React, { useContext } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { PosterContext } from "../../contexts/PosterContext";
import Form, { SimpleItem, GroupItem } from "devextreme-react/form";
import "./styles.scss";

const Title = () => {
  const { posterImage, handlePosterImage } = useContext(PosterContext);

  const navigate = useNavigate();
  const movie = (movieImage, movieName) => {
    console.log(posterImage.movieName, "movieName");
    navigate("/movie");
    handlePosterImage(movieImage, movieName);
  };
  const MovieRender = ({ name }) => {
    return (
      <div className="movie">
        <div
          className="card"
          onClick={() => {
            movie(name.movieUrl, name.movieName);
          }}
        >
          <img src={name.img} className="card-img" alt="Recommended Movies" />
          <div className="card-body">
            <RiHeart3Fill className="heart" />
            <p>
              {name.percentage} &nbsp; &nbsp; {name.vote}
            </p>
          </div>
        </div>
        <h3>{name.movieName}</h3>
        <p className="detail">{name.details}</p>
      </div>
    );
  };
  return (
    <>
      <h1 className="title">Recommended Movies</h1>
      <div className="movies-list">
        <div className="card-container">
          <Form>
            <GroupItem colCount={9}>
              <SimpleItem
                name={{
                  movieName: "Theerppu",
                  img: require("../../assets/img/poster/poster1.jpg"),
                  percentage: "93%",
                  vote: "928 votes",
                  details: "Drama/Thriller",
                  movieUrl: "poster1.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Thallumaala",
                  img: require("../../assets/img/poster/poster2.jpg"),
                  percentage: "92%",
                  vote: "16K votes",
                  details: "Action/Comedey",
                  movieUrl: "poster2.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Nna Thaan Case Kodu",
                  img: require("../../assets/img/poster/poster3.jpg"),
                  percentage: "94%",
                  vote: "14K votes",
                  details: "Comedy/Drama",
                  movieUrl: "poster3.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Liger",
                  img: require("../../assets/img/poster/poster4.jpg"),
                  percentage: "59%",
                  vote: "74K votes",
                  details: "Action/Drama/Romantic",
                  movieUrl: "poster4.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Thiruchitrambalam",
                  img: require("../../assets/img/poster/poster5.jpg"),
                  percentage: "87%",
                  vote: "34K votes",
                  details: "Comedy/Drama/Musical",
                  movieUrl: "poster5.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Sita Ramam",
                  img: require("../../assets/img/poster/poster6.jpg"),
                  percentage: "92%",
                  vote: "120K votes",
                  details: "Action/Drama/Romantic",
                  movieUrl: "poster6.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Kudukka 2025",
                  img: require("../../assets/img/poster/poster7.jpg"),
                  percentage: "90%",
                  vote: "3K votes",
                  details: "Drama/Thriller",
                  movieUrl: "poster1.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Peace",
                  img: require("../../assets/img/poster/poster8.jpg"),
                  percentage: "84%",
                  vote: "226 votes",
                  details: "Comedy/Drama/Thriller",
                  movieUrl: "poster8.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
              <SimpleItem
                name={{
                  movieName: "Beyond The 7 Seas",
                  img: require("../../assets/img/poster/poster9.jpg"),
                  percentage: "80%",
                  vote: "11K votes",
                  details: "Drama/Fantasy/Thriller",
                  movieUrl: "poster9.jpg",
                }}
                render={MovieRender}
              ></SimpleItem>
            </GroupItem>
          </Form>
        </div>
      </div>

      <div className="strip">
        <img
          src={require("../../assets/img/strip.webp")}
          style={{ height: "105px" }}
          alt=""
        />
      </div>
    </>
  );
};

export default Title;
