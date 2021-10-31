import React from 'react';

const ShowGuides = (props) => {
    const { name, title, imageUrl } = props.guide;
    return (
        <div className="col-md-4">
            <div className="text-center">
                <img src={imageUrl} alt="" />
                <h4>{name}</h4>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default ShowGuides;