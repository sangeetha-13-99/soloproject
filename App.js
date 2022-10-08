import React from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar";
import data from "./data";
import Card from "./Card";

export default function App(){
    let places = data.map(item => {
        return(
            <Card key={item.title} {...item} />
        )
});
    
    return (
        <div className="app">
            <Navbar/>
            {places}
        </div>
    )
}