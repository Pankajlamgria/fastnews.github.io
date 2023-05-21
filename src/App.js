// Api key of kamal8.ks72@gmail.com=8f6769fabcda4105bf53a3c5ff70aa93
import "./App.css";
import React,{useState} from "react";
import Navbar from "./component/Navbar";
import New from "./component/New";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default function App () {
  const [loadingbar,setloadingbar]=useState(0);

  // to Install the latest react router dom $ npm install --save react-router-dom
  let apikey="073f7791006a41f0b76f6493b9b2f396"
  const setbar=(val)=>{
    setloadingbar(val)
  }
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='blue'
        progress={loadingbar}
        // onLoaderFinished={this.setState.loadingbar=0}
      />

          <Switch>
            <Route exact key={"general2"} path="/">
              <New setpropges={setbar}
                key="general"
                heading="ALL TOP HEADLINES"
                country="in"
                category="general"
                apikey={apikey} 
                pageitem={7}
              />
            </Route>
            <Route exact key={"technology2"}  path="/technology">
              <New setpropges={setbar}
                apikey={apikey} 
                key="technology"
                heading="TECHNOLOGY HEADLINES"
                country="in"
                category="technology"
                pageitem={7}
              />
            </Route>
            <Route exact key={"sports2"} path="/sports">
              <New setpropges={setbar}
                key="sports"
                heading="SPORTS HEADLINES"
                country="in"
                category="sports"
                apikey={apikey} 
                pageitem={7}
              />
            </Route>
            <Route exact key={"entertainment2"} path="/entertainment">
              <New setpropges={setbar}
                key="entertainment"
                heading="ENTERTAINMENT  HEADLINES"
                country="in"
                apikey={apikey} 
                category="entertainment"
                pageitem={7}
              />
            </Route>
            <Route exact key={"business2"} path="/business">
              <New setpropges={setbar} 
                key="business"
                apikey={apikey} 
                heading="BUSINESS HEADLINES"
                country="in"
                category="business"
                pageitem={7}
              />
            </Route>
            <Route exact key={"health2"} path="/health">
              <New setpropges={setbar}
                key="health"
                apikey={apikey} 
                heading="HEALTH HEADLINES"
                country="in"
                category="health"
                pageitem={7}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

