'use client';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const radiosx = {
    display: 'none',
}

const labelsx = {
    transition: 'all .6s',
    border: '1px solid #654321',
    padding: '.2em .5em',
    borderRadius: '.2em',
    '&:has(:checked)': {
        background: 'lightblue'
    }
}

export default function TxnTypeRadio() {
    return (
        <RadioGroup row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group">

            <FormControlLabel value="female" control={
                <Radio sx={radiosx} />
            } label={<CustomLabel>現買賣</CustomLabel>} sx={labelsx} />

            <FormControlLabel value="daily" control={
                <Radio sx={radiosx} />
            } label={<CustomLabel>當沖</CustomLabel>} sx={labelsx} />

        </RadioGroup >
    );
}

function CustomLabel({ children }) {
    return <span style={{
        fontSize: '1.4em',
    }}>{children}</span>
}