import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component{
    render(){
        return (
            <TextField
            label="add item to the list..."
            margin="normal"
            fullWidth
            />
        );
    }
}