import React, { useEffect, useState } from 'react';
import ShowPlacesToVisit from '../../ShowPlacesToVisit/ShowPlacesToVisit';

const PlacesToVisit = () => {
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        fetch('https://eerie-treat-99297.herokuapp.com/allplaces')
        .then(res => res.json())
        .then(data =>setPlaces(data))
    },[])
    return (
        <div>
            <h1 className="m-5 text-center text-primary">Places You Should Visit</h1>
            <div className="row">
                {
                    places.map(place => <ShowPlacesToVisit
                    key={place._id}
                    place={place}
                    />)
                }
            </div>
        </div>
    );
};

export default PlacesToVisit;