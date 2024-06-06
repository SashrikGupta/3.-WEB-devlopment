import React, { useState } from "react";
const Mtb = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const movies = [
    { id: 1, title: "Movie 1", availableSeats: 100 },
    { id: 2, title: "Movie 2", availableSeats: 80 },
    { id: 3, title: "Movie 3", availableSeats: 120 },
  ];
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
  };
  const handleSeatSelect = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };
  return (
    <div>
      <h2>Movie Ticket Booking</h2>
      <div>
        <h3>Select a movie:</h3>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
              {movie.title} ({movie.availableSeats} seats available)
            </li>
          ))}
        </ul>
      </div>
      {selectedMovie && (
        <div>
          <h3>Selected Movie: {selectedMovie.title}</h3>
          <h4>Select your seats:</h4>
          <div>
            {Array.from(
              { length: selectedMovie.availableSeats },
              (_, index) => (
                <button
                  key={index}
                  disabled={selectedSeats.includes(index)}
                  onClick={() => handleSeatSelect(index)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
          <div>
            <h4>Selected Seats:</h4>
            {selectedSeats.map((seat) => (
              <span key={seat}>Seat {seat + 1}, </span>
            ))}
          </div>
          <button onClick={() => setSelectedSeats([])}>Reset</button>
        </div>
      )}
    </div>
  );
};
export default Mtb ; 
