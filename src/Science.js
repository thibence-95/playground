import { Link, Route } from "react-router-dom";
import Product from "./Product";
import React, { useState, useEffect } from 'react';
const apiKey=process.env.REACT_APP_SECRET_KEY;

function Science() {
    const [totalReactPackages, setTotalReactPackages] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key='+apiKey)
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
            <h1 style={{color:'#00BCF3 '}}>Science<span>.</span></h1>
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
// document.body.style.backgroundColor = 'red';

export default Science;
