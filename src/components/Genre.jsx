import React from 'react';
import { Link } from 'react-router-dom';

function Genre(props) {
    const{ genre } = props;
    return (
        <Link to={genre.id} className='badge bg-warning me-2 p-2'>{genre.name}</Link>
    );
}

export default Genre;