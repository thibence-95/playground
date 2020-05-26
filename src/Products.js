import { Link, Route } from "react-router-dom";
import Product from "./Product";
import React, { useState, useEffect } from 'react';

function Products() {
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Eh1mLri6hw2hf4qYmOWIebjtpxSXZBLL')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.results));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(totalReactPackages);
    return (
        <div >
        {/*    style={{*/}

        {/*    backgroundColor: '#93e4ff',*/}
        {/*    width: '100%',*/}
        {/*    height: '100%'*/}
        {/*}}*/}
            <h1>🔬Science<span>.</span></h1>
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


export default Products;
