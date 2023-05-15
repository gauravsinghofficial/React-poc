import { createContext, useState } from "react";

export const PosterContext = createContext();

export const PosterContextProvider = ({ children }) => {
  const [posterImage, setPosterImage] = useState({
    movieImage: "",
    movieName: "",
  });
  const handlePosterImage = (image, Name) => {
    setPosterImage({
      ...posterImage,
      movieImage: image,
      movieName: Name,
    });
  };

  return (
    <PosterContext.Provider value={{ posterImage, handlePosterImage }}>
      {children}
    </PosterContext.Provider>
  );
};
