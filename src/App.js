
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login, { fakeAuth } from "./Login";
import React, { useState, useEffect } from 'react';
import './styles.css'

export default function App() {

    return (
    <div>
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">

          <li>
              <Link to="/category"><input type="Add Tag" name="name" /></Link>
          </li>
          <li>
              <Link to="/">🔥 Trending</Link>
          </li>
          <li>
            <Link to="/products">🔬 Science</Link>
          </li>
          <li>
              {/*<Link to="/admin"> 👽 Conspiracy</Link><br/>*/}
              +

          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

//Home component
function Home() {
    const apiKey=process.env.REACT_APP_SECRET_KEY;

    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+apiKey)
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.results));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);
    return (
        <div>
        {/*    style={{*/}

        {/*    backgroundColor: '#FF5733',*/}
        {/*    width: '100%',*/}
        {/*    height: '100%'*/}
        {/*}}*/}
            <h1>🔥Trending<span>.</span></h1>
            {totalReactPackages.length > 0 ? (
                totalReactPackages.map(item => (
                    <li>
                        <a href={item.url}> <h2>{item.title}</h2>
                            <p>{item.abstract}</p>
                            <img src={item.multimedia[0].url} alt={item.multimedia[0].url} /></a>
                    </li>
                ))
            ) : (
                <h1>Loading posts...</h1>
            )}
        </div>
    );

}

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};
