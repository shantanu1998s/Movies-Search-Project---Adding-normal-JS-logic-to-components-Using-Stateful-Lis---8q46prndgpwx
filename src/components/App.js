import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState([]);
    const arr=[];
    async function handleClick(e) {
        e.preventDefault();
        arr.length=0;
        for(let elem of movies){
            if(inputValue.trim().toLocaleLowerCase()==elem.title.toLocaleLowerCase()){
                arr.push(elem);
            }
        }
        setInputValue('');
        setResult(arr);
    }
    function handleChange(e) {
        setInputValue(e.target.value);
    }
    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results.map((movie) => (
                        <div key={movie.id} className="movie">{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
