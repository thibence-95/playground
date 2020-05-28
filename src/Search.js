import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
const apiKey=process.env.REACT_APP_SECRET_KEY;

const Search = ({  }) => {
    // const apiKey=process.env.REACT_APP_SECRET_KEY;
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+totalReactPackages+'&api-key='+apiKey)
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.response));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);

    return (

        <input name="firstName" onChange={e => setTotalReactPackages(e.target.value)} />

    );

};


export default Search;
