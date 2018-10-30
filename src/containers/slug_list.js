import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class SlugList extends Component {

  renderMicroURL(apiResponse,index) {
    if (apiResponse) {
      const destinationURL = !apiResponse.destinationURL ? apiResponse.destinationURL : decodeURIComponent(apiResponse.destinationURL);
      const microURL = apiResponse.microURL;
      return (
        <li key={microURL} className='list-group-item list-group-item-success flex-column align-items-start'>
          <a className='list-group-item-action active' rel="noopener noreferrer" target="_blank" href={microURL}>{microURL}</a>

          <span><CopyToClipboard text={microURL}>
            <div className="btn-group btn-group-sm float-right">
            <button className="btn btn-info">Copy to clipboard</button>
          </div>
          </CopyToClipboard>
        </span>
          <ul>
            <li>
              redirects to: {destinationURL}
            </li>
          </ul>
        </li>
      );
      } else {

      return (
        <li key={index} className='list-group-item list-group-item-danger flex-column align-items-start'>
            Invalid URL
        </li>
      );
    }
  }

  render() {
    // console.log(this.props.microAPI);
    // const testArray = [{
    //   destinationURL: 'http%3A%2F%2FhelloSunshine.ca',
    //   microURL: 'http://microapi:8888/mmD1H8',
    //   slug: 'mmD1H8',
    //   write: 'ok'
    // }]
    return (
      <div>
        <ul className="list-group">
          {/* {testArray.map(this.renderMicroURL)} */}
          {this.props.microAPI.map(this.renderMicroURL)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ microAPI }) {
  return { microAPI };
}

export default connect(mapStateToProps)(SlugList);
