import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";

const Category = ({ match }) => {
    const apiKey=process.env.REACT_APP_SECRET_KEY;

    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('\n' +
            'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key='+apiKey)
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.results));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);
    return (
      ""
    );
};

export default Category;
