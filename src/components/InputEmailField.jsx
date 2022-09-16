import React, { useState } from 'react'
import { FormControl, TextField } from "@mui/material";
import isEmail from 'validator/lib/isEmail';

export const InputEmailField = (props) => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState(false);

    const handleChange = event => {
        const val = event.target.value;

        if (isEmail(val)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        setValue(val);
        props.handleChange(val, isValid);
    }

    return (
        <>
            <FormControl fullWidth={props.isFullWidth} >
                <TextField
                    error={dirty && isValid === false}
                    onBlur={() => setDirty(true)}
                    id={props.fieldName}
                    label={props.label}
                    name={props.fieldName}
                    variant="outlined"
                    // size={'small'}
                    helperText={props.helperText}
                    value={value}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => handleChange(e)}
                    sx={{ "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": { boxSizing: "border-box", border: "2px solid #a6a6a6", borderRadius: "4.375rem", padding: ".5rem 1.5rem .5rem .7rem", backgroundColor: "transparent" }, color: "#a6a6a6", mt: "1rem" }}
                />

            </FormControl>
        </>
    )
}