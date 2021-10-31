import React from 'react';

const ShowPlacesToVisit = (props) => {
    const { name, description, imageUrl } = props.place;
    return (
        <div className="col-md-12">
            <div className="container">
                <div className="text-center">
                    <img className="img-fluid" src={imageUrl} alt="" />
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ShowPlacesToVisit;