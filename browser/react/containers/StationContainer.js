import React, { Component } from 'react';
import { connect } from 'react-redux';
import {convertSong} from '../utils';
import { toggleSong } from '../action-creators/player';

import Station from '../components/Station';

const mapStateToProps = (state, ownProps) => {
    console.log('state', state)
    return {
        genreName: ownProps.params.genreName,
        songs: state.songs
            .filter(song => song.genre === ownProps.params.genreName)
            .map(convertSong),
        currentSong: state.player.currentSong,
        isPlaying: state.player.isPlaying
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const StationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Station); //<--renders Stations

export default StationContainer;