import React, { useState } from 'react';
import {FormGroup, RadioGroup, FormControlLabel, Radio, TextareaAutosize, 
    DialogActions, Button, TextField} from '@material-ui/core';
import styles from './PermissionsForm.module.css';

// TODO create props interface
// TODO create state for Textarea on Parent Component

const PermissionsForm = (props) => {

     // Validation declaratisons
     const dodoValidation = new RegExp('^([A-Z0-9]{5})');

    const [dodoCode , setDodoCode] = useState({
        text: '',
        helperText: '',
        error: false,
    });


    const handleOnChange = (e) => {
        props.handleDodoCodeChange(e);
        if(dodoValidation.test(e.target.value)) {
            setDodoCode({text: e.target.value, error: false, helperText: ''});
        } else {
            setDodoCode({error: true, helperText: '5 Characters/Numbers Uppercase', text: e.target.value});
        }
    }


    let dodoCodeField;

    if(props.eventPermissions === 'dodoCode') {
        dodoCodeField = (
            <TextField  
                onChange={handleOnChange} 
                id="standard-basic" 
                label="Dodo Code" 
                error={dodoCode.error}
                helperText={dodoCode.helperText}
                style={{maxWidth: 200}}
                color="primary"
                variant="outlined"
                />
        );
    }

    return (
        <div>
            <FormGroup className={styles.formContainer} >
                <RadioGroup className={'noselect'} name="invitePermissions" value={props.eventPermissions} onChange={props.handleCheckChange}>
                    <FormControlLabel value="friends" control={<Radio color="primary"/>} label="Friends Only" />
                    <FormControlLabel value="bestFriends" control={<Radio color="primary"/>} label="Best Friends Only" />
                    <FormControlLabel value="dodoCode" control={<Radio color="primary"/>} label="Dodo Code" />
                </RadioGroup>
                {dodoCodeField}
                <TextareaAutosize className={styles.textArea} rowsMax={4} rows={4} placeholder="Include message..." ></TextareaAutosize>
            </FormGroup>
            <DialogActions>
                <Button onClick={props.handleClose} color="secondary">Cancel</Button>
                <Button onClick={props.handlePublishClick} color="primary">Publish</Button>
            </DialogActions>
        </div>
    );
};

export default PermissionsForm;