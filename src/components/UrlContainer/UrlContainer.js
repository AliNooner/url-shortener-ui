import React from 'react';
import Card from '../Card/Card'
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p className="long-url">{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { props.error && <p>{props.error}</p> }
      { !urlEls.length && !props.error && <p>No urls yet! Find some to shorten!</p> }
      { urlEls.length && !props.error ? urlEls : null }
    </section>
  )
}

export default UrlContainer;
