// Api key of kamal8.ks72@gmail.com=8f6769fabcda4105bf53a3c5ff70aa93
import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import New from "./component/New";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [loadingbar, setloadingbar] = useState(0);
  const [theme,settheme]=useState(false);

  // to Install the latest react router dom $ npm install --save react-router-dom
  let apikey = "8f6769fabcda4105bf53a3c5ff70aa93";
  const setbar = (val) => {
    setloadingbar(val);
  };
  const toggledarkmode=()=>{
    theme?settheme(false):settheme(true);
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar theme={theme} toggelfunc={toggledarkmode}/>
          <LoadingBar
            color="blue"
            progress={loadingbar}
            // onLoaderFinished={this.setState.loadingbar=0}
          />
        {/* backgroundColor:"rgb(42 41 41)",color:"white"*/}
        <div className="allcontent" style={theme?{backgroundColor:"rgb(56 56 56)  ",color:"white"}:{}}>  
          <Switch>
            <Route exact key={"general2"} path="/">
              <New
                setpropges={setbar} theme={theme}
                key="general"
                heading="ALL TOP HEADLINES"
                country="in"
                category="general"
                apikey={apikey}
                pageitem={7}
              />
            </Route>
            <Route exact key={"technology2"} path="/technology">
              <New
                setpropges={setbar} theme={theme}
                apikey={apikey}
                key="technology"
                heading="TECHNOLOGY HEADLINES"
                country="in"
                category="technology"
                pageitem={7}
              />
            </Route>
            <Route exact key={"sports2"} path="/sports">
              <New
                setpropges={setbar} theme={theme}
                key="sports"
                heading="SPORTS HEADLINES"
                country="in"
                category="sports"
                apikey={apikey}
                pageitem={7}
              />
            </Route>
            <Route exact key={"entertainment2"} path="/entertainment">
              <New
                setpropges={setbar} theme={theme}
                key="entertainment"
                heading="ENTERTAINMENT  HEADLINES"
                country="in"
                apikey={apikey}
                category="entertainment"
                pageitem={7}
              />
            </Route>
            <Route exact key={"business2"} path="/business">
              <New
                setpropges={setbar} theme={theme}
                key="business"
                apikey={apikey}
                heading="BUSINESS HEADLINES"
                country="in"
                category="business"
                pageitem={7}
              />
            </Route>
            <Route exact key={"health2"} path="/health">
              <New
                setpropges={setbar} theme={theme}
                key="health"
                apikey={apikey}
                heading="HEALTH HEADLINES"
                country="in"
                category="health"
                pageitem={7}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
// export default App.js