import React, { Component } from 'react';
import { connect } from 'react-redux';

import Stations from '../components/Stations';

const mapStateToProps = (state) => {
    console.log("STATE: ", state);
    return {
        stations: convertSongsToStations(state.songs)
    };
}

const mapDispatchToProps = (dispatch) => {
   return {}; 
}

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const StationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stations); //<--renders Stations

export default StationsContainer;