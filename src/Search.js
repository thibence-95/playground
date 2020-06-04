import React, {useState} from "react";
const apiKey=process.env.REACT_APP_SECRET_KEY;
export default function Search(){

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [article, setArticle] = useState([]);

    const searchArticle = async (e) => {
        e.preventDefault();

        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=The New York Times&api-key=`+ apiKey;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setArticle(data.response.docs);
        }catch(err){
            console.error(err);
        }
    };
console.log(article);
    return (

        <>
            <form className="form" onSubmit={searchArticle}>
                <label className="label" htmlFor="query"></label>
                <h1 style={{borderBottom:'2px solid black'}}><input className="input" type="text" name="query"
                                                                  placeholder=""
                                                                  value={query} onChange={(e) => setQuery(e.target.value)}
                /><span style={{ color:"white"}}>|</span></h1>
                <button className="button" type="submit">🔍</button>
            </form>
            <div style={{ paddingTop:'20%', marginBottom:'20%'}}>

                {article.map(item => (
                    <a href={item.web_url}>         <li>
                    <h2>{item.abstract}</h2>
                            <p>{item.snippet}</p>

                        {/*<img  src={"https://static01.nyt.com/" +item.multimedia[0].url} alt={item.multimedia[0].url}  />*/}
                    </li></a>

                ))}

            </div>

        </>
    )
}

