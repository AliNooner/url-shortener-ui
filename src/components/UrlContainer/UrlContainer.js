import React from 'react';
import Card from '../Card/Card'
import './UrlContainer.css';

const UrlContainer = ({urls}) => {


  const urlEls = urls.map(url => {
  //   return (
  //     <div className="url">
  //       <h3>{url.title}</h3>
  //       <a href={url.short_url} target="blank">{url.short_url}</a>
  //       <p>{url.long_url}</p>
  //     </div>
  //   )
  // });

  // return (
  //   <section>
  //     { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
  //   </section>
  // )

  return(
    <Card
      title={url.title}
      longUrl={url.long_url}
      shortUrl={url.short_url}
      id={url.id}
      key={url.id}
    />
  )
})

return (
  <div className='url-container'>
  {urlEls}
  </div>
)
}

export default UrlContainer;
