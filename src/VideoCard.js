import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

const VideoCard = forwardRef(({ movie }, ref) => {
  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.posters_path}`}
        alt="movie Poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2> {movie.title || movie.original_name} </h2>
      <p className="videoCard__stats">
        <span>Release date: {movie.release_date || movie.first_air_date}</span>
        <br />
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
