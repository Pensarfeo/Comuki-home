import { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Modal, {CloseModalButton} from 'components/layout/modal'

import styled from 'styled-components'

import intro from 'public/intro.mp3'


export const WaveformContianer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 32px;
`;  

export const Wave = styled.div`

  width: 100%;
  margin-left: 20px;
  & wave {
    overflow: hidden !important;
  }
/* height: 100%; */
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  /* background: #EFEFEF; */
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: #DDD;
  }
`;

function playAndLoad(ws) {
  ws.on("ready", function () {
    ws.playPause();
});

}



class Waveform extends Component {  
  state = {
    playing: false,
  };

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2570FF',
      responsive: true,
      waveColor: '#1cc0bb',
      cursorColor: '#1cc0bb',
    });

    this.waveform.load(track);
    playAndLoad(this.waveform)
  };

  componentWillUnmount() {
    console.log("asdfasdf")
    this.waveform.destroy();    
  }
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    const url = 'public/intro.mp3';
    return (
      <WaveformContianer>
        <button
          className = "button button-primary"
          style = {{color: 'white', width: "60px", padding: 0, height: '40px'}}
          onClick={this.handlePlay}
        >
          <i className = {"icon fa-" + (!this.state.playing ? 'play' : 'pause')}/>
        </button>
        <Wave id="waveform" />
        <audio id="track" src={intro} />
      </WaveformContianer>

    );
  }
};

export default function Explainer ({showModal, toggleModal}) {
  return(
    <Modal showModal = {showModal} toggleModal = {toggleModal}>
      <div className="explainerModal col-md-16 align-self-center">
        <CloseModalButton  toggleModal = {toggleModal}/>
        <Waveform/>
      </div>
    </Modal>

  )
}


