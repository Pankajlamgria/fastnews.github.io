import React from "react";

const Newsitem = (props)=> {
    let {title,description,imgurl,url,date,author,theme2}=props;
    return (
      <div>
        <div className="card" style={{width: "18rem",margin:"auto"}}>
          {/* {console.log(theme2)} */}
          <img src={imgurl?(imgurl):("https://cdn.mos.cms.futurecdn.net/WAt3SFtPVYWpgfA7PDSz7c-1200-80.jpg")}className="card-img-top" alt="/" style={{height:"180px"}}/>
          <div className="card-body"  style={theme2?{backgroundColor:"rgb(56 56 56)  ",color:"white"}:{backgroundColor:"#efefef"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text" ><small  style={theme2?{color:"#e2f1da"}:{color:"grey"}}>By - {author}  On {date}</small></p>
            
            <a href={url} target="_blank" className="btn btn-sm btn-success" style={theme2?{backgroundColor:"black",color:"white"}:{ backgroundColor:"#089956"}}>
              Read more
            </a>
        
          </div>
        </div>
      </div>
    );
  }
  export default Newsitem;