import React from 'react';
import types from 'prop-types';
import Header from './Header';
import ContestPreview from './contestPreview';
import data from '../testData'

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
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id}{...contest} />
          )}
        </div>
      </div>
    );
  }
};


export default App;
