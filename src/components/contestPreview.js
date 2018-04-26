import React, { Component } from 'react';
import types from 'prop-types';

class ContestPreview extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="link ContestPreview">
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <div className="contest-name">
          {this.props.contestName}
        </div>
      </div>
    );
  }
}
ContestPreview.propTypes = {
  categoryName: types.string.isRequired,
  contestName: types.string.isRequired
};

export default ContestPreview;