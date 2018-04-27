import React from 'react';
import ReactDOM from 'react-dom'
import types from 'prop-types';
import Header from './Header';
import ContestPreview from './contestPreview';
import data from '../testData';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import EditControlExample from './editable';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageHeader:"GTFS-ride",
      contests: this.props.initialContests
    };
  }
  componentDidMount() {
    
  }
  componentWillUnmount() {
  
  }
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        
          <EditControlExample />
        
      </div>
    );
  }
};


export default App;
