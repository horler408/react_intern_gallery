import React, { useState, useEffect } from 'react';
import PhotoCard from './components/PhotoCard';
import { Container, Grid } from '@material-ui/core'

export default function API() {
    const endpoint = `https://jsonplaceholder.typicode.com/photos`;

    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [photoPerPage] = useState(10);

    const photoAlbums = (items) => {
        const results = items.map(item => {
            return item.albumId
        });
        const uniques = new Set(results);
        return [...uniques]
    }

    useEffect(() => {
        const fetchAPI = async ()=> {
            const response = await fetch(endpoint);
            const data = await response.json();
            const albumId = photoAlbums(data)
            //const result = data.splice(0, albumId.length)
            console.log(data);
            const results = data.filter(item => {
                return item.albumId = albumId
            })

            console.log(albumId);
            console.log(results);
            setPhotos(data)
        }

        fetchAPI();
    }, [endpoint])

    // Get display Photos
    const indexOfLastPhoto = currentPage * photoPerPage;
    //const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const displayPhotos = photos.slice(0, indexOfLastPhoto);

    //Show more event
    const showMore = () => {
        setCurrentPage(currentPage + 1)
    }
    const showLess = () => {
        setCurrentPage(currentPage - 1)
    }

    return (
        <Container fixed>
            <h2>{displayPhotos.length}</h2>   
            <PhotoCard 
                photos={displayPhotos}
                showMore={showMore}
                showLess={showLess} 
                lastPage={indexOfLastPhoto}
            />
        </Container>
    )
}
