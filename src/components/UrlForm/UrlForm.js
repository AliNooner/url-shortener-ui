import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

submitUrl = (event) => {
    event.preventDefault();
    const newUrl = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewUrl(newUrl)
    this.clearInputs();

    fetch('/api/v1/urls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newUrl)
    })
  }

  clearInputs = () => {
    this.setState({
      title: '',
      urlToShorten: ''
    });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleNameChange(event)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={event => this.handleNameChange(event)}
        />

        <button onClick={(event) => this.submitUrl(event)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
