import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaBed, FaPersonBooth, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotel-data')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    // console.log(rooms)

    return (
        <Container className=' mt-5'>
            <Row xs={1} md={3} className="g-5">
                {rooms.map((room, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={room.image} className='w-100' />
                            <Card.Body>
                                <Card.Title>{room.roomType}</Card.Title>
                                <Card.Text>
                                    {room.shortDescription}
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Text>
                                        <FaBed className='me-2' />
                                        :
                                        <span className='ms-2'>{room.availableBeds}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <FaPersonBooth className='me-2' />
                                        :
                                        <span className='ms-2'>{room.personCapacity}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <FaDollarSign />
                                        <span>{room.pricePerNight}</span>
                                    </Card.Text>
                                    <Link to={`/book/room/${room.id}`}>
                                        <button className='btn btn-primary'>Book</button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>


    );
};

export default Rooms;