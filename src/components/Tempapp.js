import React, { useEffect, useState } from "react";
import "./css/style.css"

const Tempapp=()=>{
    const[city, setCity]=useState("Chandrapur");
    const[search,setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi= async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2f03a6c5491781e58e7d919d43cf1ce8`
            const response = await fetch(url);
            console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);

        }

        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
        <div className="inputData">
            <input 
            type="search"
            className="inputField"
            onChange={(event)=>{setSearch(event.target.value)}}
            />
        </div>

        {
            !city ? (
            <p>No data Found</p>
            ) : (

                <div className="info">
                <h2 className="location">
                <i className="fa-solid fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">{city.temp}</h1>
                <h4 className="tempMin_Max">{city.temp_max}|| {city.temp_min}</h4>
            </div>
           
            )
        }
 </div>
       
        </>
    )
}
export default Tempapp;