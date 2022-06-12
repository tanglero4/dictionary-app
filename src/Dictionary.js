import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]= useState(false);
    let [photos, setPhotos]= useState("");

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        console.log(response);
        setPhotos(response.data.photos);
    }

function handleSubmit(event){
    event.preventDefault();
    search();
}
    function search(event){
        //Documentation: https://dictionaryapi.dev/
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey="563492ad6f9170000100000194a18ec8ad8c47469a298aba1995848b";
        const pexelsUrlApi= `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsUrlApi, {headers: headers}).then(handlePexelsResponse);
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
        <Photos photos={photos} />
        </div>
    );
}else{
    load();
    return "Loading";

}

}