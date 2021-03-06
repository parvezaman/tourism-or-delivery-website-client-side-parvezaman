import React, { useEffect, useState } from 'react';
import ShowGuides from '../../ShowGuides/ShowGuides';

const OurGuides = () => {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
        fetch('https://eerie-treat-99297.herokuapp.com/allguides')
            .then(res => res.json())
            .then(data => setGuides(data))
    }, [])
    return (
        <div id="ourguides" className="container">
            <h1 className="text-center m-5 text-primary">Let's Meet with some of our Guides</h1>
            <div className="row g-5">
                {
                    guides.map(guide => <ShowGuides
                        key={guide._id}
                        guide={guide}
                    />)
                }
            </div>
        </div>
    );
};

export default OurGuides;