import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]= useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }
function handleSubmit(event){
    event.preventDefault();
    search();
}
    function search(event){
        //Documentation: https://dictionaryapi.dev/
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

function load(){
    setLoaded(true);
    search();
}
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
if (loaded){
    return(
        <div className="Dictionary">
            <h1>Dictionary</h1>
            <section>
                <h2>What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
            <input type="Search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
            <div className="hint">
                suggested keywords: wine, plant, meditation, forest...
            </div>
        </form>
        </section>
        <Results results={results}/>
        </div>
    );
}else{
    load();
    return "Loading";

}

}