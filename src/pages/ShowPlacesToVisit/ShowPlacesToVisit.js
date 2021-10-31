import React from 'react';

const ShowPlacesToVisit = (props) => {
    const { name, description, imageUrl } = props.place;
    return (
        <div className="col-md-12">
            <div className="container mb-5 mt-5">
                <div className="text-center mb-3">
                    <img className="img-fluid" src={imageUrl} alt="" />
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ShowPlacesToVisit;