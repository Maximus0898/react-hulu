import React from 'react';
import './Nav.css';
import requests from './requests';

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAction)}>Action</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>TV</h2>
    </div>
  );
}

export default Nav;
