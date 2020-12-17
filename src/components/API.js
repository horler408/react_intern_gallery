import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { Container } from '@material-ui/core'

export default function API() {
    // API baseUrl
    const endpoint = `https://jsonplaceholder.typicode.com/photos`;

    // Initial states
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [photoPerPage] = useState(10);


    // Function to execute on loading the page
    useEffect(() => {
        const fetchAPI = async ()=> {
            const response = await fetch(endpoint);
            const data = await response.json();

            //console.log(data);
            setPhotos(data)
        }

        fetchAPI();
    }, [endpoint])

    // Get display Photos
    const indexOfLastPhoto = currentPage * photoPerPage;
    const displayPhotos = photos.slice(0, indexOfLastPhoto);

    //Increamenting the display
    const showMore = () => {
        setCurrentPage(currentPage + 1)
    }
    // Decreamenting the display
    const showLess = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <Container fixed>
            <h2>{displayPhotos.length} Placeholder Photos</h2>   
            <PhotoCard 
                photos={displayPhotos}
                showMore={showMore}
                showLess={showLess} 
                lastPage={indexOfLastPhoto}
            />
        </Container>
    )
}
