import React, { Component } from 'react';
import UrlEntry from '../containers/url_entry';
import SlugList from '../containers/slug_list';
import axios from 'axios';
import { Config } from '../components/config';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { slugs: ''};
  }

  componentDidMount() {
    axios.get(`${Config.API_SIZE}`)
      .then(res => {
        this.setState({slugs: res.data.NumberOfSlugs});
      });
  }

  showCount(count) {
    return 
  }

  render() {
    return (
      <div className="jumbotron">
        <h2 className="display-5">Mic.ro URL shortener</h2>
        {this.state.slugs.length > 0 && <div className="lead">Over <span>{this.state.slugs}</span> links and growing!</div>}
        <hr className="my-4" />
        <p className="lead">Service endpoint: {Config.API_URL}</p>
        <UrlEntry />
        <SlugList />
      </div>
    );
  }
}
