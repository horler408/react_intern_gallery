import React, { useState } from 'react';
import { Radio, Grid, Paper, makeStyles } from '@material-ui/core'
import { RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  

export default function Page() {

    const [spacing, setSpacing] = useState(2)
    const classes = useStyles()

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
      };
    

    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.control}>
                    <Grid container>
                        <Grid item>
                        <FormLabel>spacing</FormLabel>
                        <RadioGroup
                            name="spacing"
                            aria-label="spacing"
                            value={spacing.toString()}
                            onChange={handleChange}
                            row
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <FormControlLabel
                                key={value}
                                value={value.toString()}
                                control={<Radio />}
                                label={value.toString()}
                            />
                            ))}
                        </RadioGroup>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}