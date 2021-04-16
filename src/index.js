import React from "react";
import ReactDom from "react-dom";
import './index.css';
import Card from './Cards';
import Sdata from './Sdata';

// function netflixCard(cvalue) {
//     return (
//     <Card
//     imgsrc = {cvalue.imgsrc}
//     cardInfo={cvalue.cardInfo}
//     series_name={cvalue.series_name}
//     linkforseries={cvalue.linkforseries}
//     />)
// }

ReactDom.render(
    <>
    <h1 className="heading_style">This is best 5 webseries aviable at Netflix</h1>
    {Sdata.map((cvalue) =>{
            return (
            <Card
            imgsrc = {cvalue.imgsrc}
            cardInfo={cvalue.cardInfo}
            series_name={cvalue.series_name}
            linkforseries={cvalue.linkforseries}
            />)
        }
    )}
    </>,
    document.getElementById("root")
);  