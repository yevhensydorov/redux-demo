import React from 'react';
import PropTypes from 'prop-types';


const SearchResult = ({result, playVideo, videoId}) =>{

   return (
      <li
        className="result-item"
        onClick={ event => {
          playVideo(videoId);
        }}
      >
        <img
          className="result-img"
          src={result.snippet.thumbnails.default.url}
          height={result.snippet.thumbnails.default.height}
          width={result.snippet.thumbnails.default.width}
        />
        <div className="result-description">
          <div>
            <strong>{result.snippet.title}</strong>
          </div>
          {result.snippet.description}
        </div>
      </li>
    );

};

SearchResult.propTypes = {
  result: PropTypes.object,
  playVideo: PropTypes.func,
  videoId: PropTypes.string
};

export default SearchResult;
