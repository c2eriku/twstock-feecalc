import { Autocomplete, TextField } from "@mui/material";

export default function FeeDiscount() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
    ];
    return <div>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <select>
            <option>123</option>
            <option>456</option>
        </select>

    </div>
}