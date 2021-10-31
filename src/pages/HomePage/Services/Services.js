import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    console.log(services.length);
    useEffect(() => {
        fetch('https://eerie-treat-99297.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);
    
    return (
        <div id="services" className="container">
            <h3 className="text-center m-5">this is services</h3>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;