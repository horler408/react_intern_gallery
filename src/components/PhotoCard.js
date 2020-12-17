import React from 'react';
import { Card, CardMedia, Grid, Typography, Button } from '@material-ui/core';


export default function PhotoCard({ photos, showMore, showLess, lastPage }) {
    return (
        <div className="card">
            {/* Conditionally showing the buttons */}
            {lastPage < 50 ? 
                (<Button variant="contained" color="primary" onClick={showMore} style={{margin:"20px"}}>
                Show More...
                </Button>) : ""}
            {lastPage > 10 ?
                (<Button variant="contained" color="primary" onClick={showLess} style={{margin:"20px"}}>
                Show Less...
                </Button>) : ""
            }
            <Grid container justify="center" spacing={4}>
                {/* Iterating over the photts */}
                {photos.map(photo => (
                    <Grid key={photo.id} item xs={12} sm={6} lg={4}>
                        <Card>
                            <CardMedia>
                                <img src={photo.url} alt="Gallery Items" />
                            </CardMedia>
                            <Typography variant="subtitle1" gutterBottom >
                                <p>{photo.title}</p>
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

                        
        </div>
    )
}
