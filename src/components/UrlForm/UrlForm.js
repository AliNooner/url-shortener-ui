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

  handleSubmit = (event) => {
    event.preventDefault();
    this.clearInputs();
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

        <button onClick={(event) => this.handleSubmit(event)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
