import React,{useState,useEffect} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const New =(props)=> {
  const [articles,setartics]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalresult,settotalresult]=useState(0);
  // const[spinnerdark,setspinnerdark]=useState(false);


  const updateweb= async()=> {
    props.setpropges(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageitem}`;
    props.setpropges(15);
    document.title = `FastNews/${props.category}`;
    setloading(true);
    let dataofurl = await fetch(url);
    let jasonformofdata = await dataofurl.json();
    // console.log(jasonformofdata);
    setartics(jasonformofdata.articles);
    settotalresult(jasonformofdata.totalResults);
    window.scrollTo(0, 0);
    setloading(false);
    setpage(page+1);
    props.setpropges(100);
  }
  // component did mount replaced by useEffect 

  useEffect(()=>{
    updateweb();
  },[])
  const fetchMoreData = () => {
    setloading(true);
    setTimeout(async () => {
      
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageitem}`;
      setpage(page+1);
      document.title = `FastNews/${props.category}`;
      let dataofurl = await fetch(url);
      let jasonformofdata = await dataofurl.json();
      console.log(jasonformofdata);
      setartics(articles.concat(jasonformofdata.articles));
      settotalresult(jasonformofdata.totalResults);
      setloading(false);
    }, 1500);
  };
  const nextbtn = async () => {
    setpage(page+1)
    updateweb();
  };
  const previousbtn = async () => {
    setpage(page-1)
    updateweb();
  };
    return (
      <>
        <InfiniteScroll   
        style={{overflow:"none"}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalresult}
          loader={<Spinner theme={props.theme}/>}
        >
          <div className="container">
            <div style={{marginTop:"55px"}}>
            </div>
            {(loading)?(<Spinner theme={props.theme}/>):("")}
            <h2 className="text-center " style={{marginTop:"0px"}} >{props.heading}</h2>
            <div className="row ">
              {articles.map((element) => {
                return (
              
                  <div className="col-md-4 my-2" >
                    <Newsitem
                      theme2={props.theme}
                      title={element.title == null ? "abc" : element.title}
                      description={
                        element.description == null
                          ? "xyz abc klm"
                          : element.description.slice(0, 88)
                      }
                      imgurl={element.urlToImage}
                      url={element.url}
                      author={element.author ? element.author : "By Unknown"}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

New.defaultProps = {
  category: "general",
  country: "in",
  pageitem: 7,

};
New.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageitem: PropTypes.number,
};

export default New;
