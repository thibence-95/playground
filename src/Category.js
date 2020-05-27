import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
const apiKey=process.env.REACT_APP_SECRET_KEY;

const Category = ({ match }) => {
    // const apiKey=process.env.REACT_APP_SECRET_KEY;
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key='+apiKey)
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.results));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);
    // return (
    //     <div>
    //         <h1><span>.</span></h1>
    //         {totalReactPackages.length > 0 ? (
    //             totalReactPackages.map(item => (
    //                 <li>
    //                     <a href={item.url}> <h2>{item.title}</h2>
    //                         <p>{item.abstract}</p>
    //                         <img src={item.multimedia[0].url} alt={item.multimedia[0].url} /></a>
    //                 </li>
    //             ))
    //         ) : (
    //             <h1>Loading posts...</h1>
    //         )}
    //     </div>
    // );
};

export default Category;
