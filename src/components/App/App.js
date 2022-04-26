import React, { Component } from 'react';
import './App.css';
import getUrls from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: []
    }
  }

  componentDidMount = () => {
    return getUrls()
      .then((data) => this.setState({urls: data.urls}))
  }

  addNewUrl = (newUrl) => {
    this.setState({urls: [...this.state.urls, newUrl]})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
