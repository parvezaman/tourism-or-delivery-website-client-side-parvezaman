import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://everestholidays.com.bd/wp-content/uploads/2019/11/Paradise-Island-Resort.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Luxurious hotels in the Beach</h3>
                        <p>Maldives offesring Beautiful Luxurious hotels in the Ocean</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://besttoppers.com/wp-content/uploads/2021/01/long-beach-cloud-sunset.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Enjoy charming sunset</h3>
                        <p>Enjoy the devine beauty of sun setting in the Ocean</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://stillbuddy.com/wp-content/uploads/2020/08/Top-10-Most-Beautiful-Hill-Stations-in-the-World.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Hills are calling</h3>
                        <p>You can avail the opportunity to Hike with family</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;