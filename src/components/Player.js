import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {
  constructor(props){
    super(props);

    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  componentDidMount(){
    window.onYouTubeIframeAPIReady = function(){
      this.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: this.props.videoId,
        events: {
          onStateChange: this.onPlayerStateChange
        }
      });
    }.bind(this);
  }

  onPlayerStateChange( event ){

  }

  componentWillReceiveProps(nextProps){
    const { videoId } = nextProps;
    if(videoId !== this.props.videoId){
      this.player.loadVideoById( videoId );
    }
  }

  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
      <div>
        <div id="player"></div>
      </div>
    );
  }
};

Player.propTypes = {
  videoId: PropTypes.string
};

export default Player;
