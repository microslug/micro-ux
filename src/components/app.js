import React, { Component } from 'react';
import UrlEntry from '../containers/url_entry';
import SlugList from '../containers/slug_list';
import { Config } from '../components/config';

export default class App extends Component {

  render() {
    const numberOfSlugs = 10;
    return (
      <div className="jumbotron">
        <h2 className="display-5">Mic.ro URL shortener</h2>
        <div className="lead">Over <span>{numberOfSlugs}</span> links and growing!</div>
        <hr className="my-4" />
        <p className="lead">Service endpoint: {Config.API_URL}</p>
        <UrlEntry />
        <SlugList />
      </div>
    );
  }
}
