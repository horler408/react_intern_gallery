import React, { useState, useEffect } from 'react';
import PhotoCard from './components/PhotoCard';

export default function API() {
    const endpoint = `https://jsonplaceholder.typicode.com/photos`;

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchAPI = async ()=> {
            const response = await fetch(endpoint);
            const data = await response.json();
            const result = data.splice(0, 50)
            // console.log(data);
            console.log(result);

            setPhotos(result)
        }

        fetchAPI();
    }, [endpoint])

    return (
        <div>
            <div>
                {photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    )
}
