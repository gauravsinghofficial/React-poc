import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PosterContext } from "../../contexts/PosterContext";
import 'devextreme/dist/css/dx.light.css';
import { Button } from 'devextreme-react/button';
import "./styles.scss";

const Movie = () => {
  const { posterImage } = useContext(PosterContext);

  const navigate = useNavigate();
  const bookTicket = () => {
    navigate("/bookticket");
  };
  // console.log("Image path", posterImage.movieImage);
  return (
    <>
      <div className="cover">
        <h1>{posterImage?.movieName}</h1>
        <div onClick={bookTicket}>
          <Button
            className="book-ticket"
            text="Book Ticket!"
          />
        </div>
        {/* <button className="book-ticket" onClick={bookTicket}>
          Book Ticket
        </button> */}
      </div>
      <div className="poster-card">
        <img
          className="poster-img"
          src={
            posterImage &&
            posterImage.movieImage &&
            require(`../../assets/img/poster/${posterImage.movieImage}`)
          }
          alt="Poster"
        />
      </div>
      <div className="content">
        <h2>About the Movie</h2>
        <p>
          Scriptwriter Murali Gopy and director Rathish Ambat's previous
          collaboration Kammarasambhavam was a tale of two halves - one about
          what actually transpired in the past and the other about how history
          was manipulated to influence the ignorant. In Theerppu, the duo
          borrows a thread or two from Kammarasambhavam, by way of how history
          is torn down and then rebuilt by the powerful, by falsifying the
          truths to appeal to the many. As a lot of audiences have come to
          expect from a Murali Gopy script, the treatment of Theerppu too is not
          the flat, linear kind; in fact, there are flashbacks of several kinds
          - one that ties to the story and the other referring to actual history
          itself. Amid this, you are bombarded with references, some of which
          even if you miss, doesn't cost too much, depending on which layer of
          the story you are invested in.
        </p>
      </div>
    </>
  );
};

export default Movie;
