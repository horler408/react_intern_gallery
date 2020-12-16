import React from 'react';
import { Card, Grid } from 'material-ui';

export default function PhotoCard({ photo }) {
    return (
        <div >
            <Grid>
                <img src={photo.url} alt="Gallery Items" />
            </Grid>
        </div>
    )
}
