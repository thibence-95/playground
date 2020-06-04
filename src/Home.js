
import React, { useState, useEffect } from 'react';
const apiKey=process.env.REACT_APP_SECRET_KEY;

function Home() {
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
        <div  >
            {/*    style={{*/}

            {/*    backgroundColor: '#93e4ff',*/}
            {/*    width: '100%',*/}
            {/*    height: '100%'*/}
            {/*}}*/}
            <h1 style={{borderBottom:'2px solid lightblue', }}>Home<span>.</span></h1>
            {totalReactPackages.length > 0 ? (
                totalReactPackages.map(item => (
                    <a href={item.url}>       <li>
                        <h2>{item.title}</h2>
                        <p>{item.abstract}</p>
                        <img style={{boxShadow: '3px 3px 5px 6px #ccc', marginBottom:'10%'}} src={item.multimedia[0].url} alt={item.multimedia[0].url} />
                    </li></a>
                ))
            ) : (
                <h1>Loading posts...</h1>
            )}
        </div>

    );

}
// document.body.style.backgroundColor = 'red';

export default Home;
