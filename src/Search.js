import React, {useState} from "react";
const apiKey=process.env.REACT_APP_SECRET_KEY;
export default function SearchMovies(){

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [article, setArticle] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=`+ apiKey;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setArticle(data.response.docs);
        }catch(err){
            console.error(err);
        }
    }
console.log(article);
    return (

        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Search Article:</label>
                <input className="input" type="text" name="query"
                       placeholder=""
                       value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>

        </>
    )
}


