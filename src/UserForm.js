import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Input } from '@material-ui/core';
import React from 'react';


const UserForm = (props) => {
    return (
    <Grid 
        container 
        spacing={2}
        sx={{
            backgroundColor: 'white',
            marginBottom: '10px',
            display: 'block',
        }}
        >
        <Grid item xs={12}>
            <Typography component ={'h1'} sx={{color: '#000000'}}>User Form</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{display: 'flex'}}> 
            <Typography 
            component ={'label'} 
            htmlFor="id"
            sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
                
            }}
            >
                ID
                </Typography>
                <Input
                type="number"
                id="id"
                name="id"
                sx={{
                    width: '400px',
                }}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display: 'flex'}}> 
            <Typography 
            component ={'label'} 
            htmlFor="id"
            sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
                
            }}
            >
                Name
                </Typography>
                <Input
                type="text"
                id="name"
                name="name"
                sx={{
                    width: '400px',
                }}
                />
            </Grid>
            <button
            sx={{
                margin: 'auto',
                marginBottom: '20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                marginLeft: '15px',
                marginTop: '20px',
                '&:hover': {
                    opacity: '0.7',
                    backgroundColor: '#45a049',
                },
            }}
            >
                Submit  
            </button>
    </Grid>    
    );
    }
    export default UserForm;