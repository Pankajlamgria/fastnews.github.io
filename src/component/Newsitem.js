import React from "react";

const Newsitem = (props)=> {
    let {title,description,imgurl,url,date,author}=props;
    return (
      <div>
        <div className="card" style={{width: "18rem",margin:"auto"}}>
          <img src={imgurl?(imgurl):("https://cdn.mos.cms.futurecdn.net/WAt3SFtPVYWpgfA7PDSz7c-1200-80.jpg")}className="card-img-top" alt="/" style={{height:"180px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By - {author}  On {date}</small></p>
            
            <a href={url} target="_blank" className="btn btn-sm btn-success">
              Read more
            </a>
        
          </div>
        </div>
      </div>
    );
  }
  export default Newsitem;