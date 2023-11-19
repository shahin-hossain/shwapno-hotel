import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const RoomBook = () => {

    const room = useLoaderData();

    // console.log(room)

    return (
        <Container>
            <h2>Booking the Room</h2>
            <h3>Room Type: {room.roomType}</h3>
            <p>Room Number: {room.roomNumber}</p>
            <p>Room Capacity: {room.personCapacity}</p>
            <p>Price: ${room.pricePerNight}</p>
        </Container>
    );
};

export default RoomBook;