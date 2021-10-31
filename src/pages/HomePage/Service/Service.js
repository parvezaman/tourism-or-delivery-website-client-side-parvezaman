import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { name, description, imageUrl, price, status, _id } = props.service || {};

    const history = useHistory();

    const handleBookNow = id =>{
        const url =`/booking/${id}`;
        console.log(url);
        history.push(url);
    }
    return (
        <div className="col-md-4 g-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price} BDT
                    </Card.Text>
                    
                    <Button onClick={()=> handleBookNow(_id)} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>

            
        </div>
    );
};

export default Service;