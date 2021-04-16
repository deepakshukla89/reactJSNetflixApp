import React from 'react';

function Card(props){
    return(
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} />
                <div className="card_info">
                    <span className="series_type">{props.cardInfo}</span>
                    <h3 className="card_title">{props.series_name}</h3>
                    <a href={props.linkforseries} target="_blank" >
                       Watch Now</a>
                </div>

            </div>

        </div>
    );
}

export default Card;