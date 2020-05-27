import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
const apiKey=process.env.REACT_APP_SECRET_KEY;

const Search = ({ match }) => {
    // const apiKey=process.env.REACT_APP_SECRET_KEY;
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&fq={filter}&api-key='+apiKey)
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.results));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);
    return (
        <div >
            <h1>.....<span>.</span></h1>

        </div>
    );
};

export default Search;
