import { Fragment, useEffect, useState } from "react"
import { getFilteredShips, getShipTypes } from "../actions/ship"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Select, MenuItem, FormControl, InputLabel, TextField, Button, Grid } from '@mui/material';
import ShipTable from "./filtered-data";


const Filter = ({ types, getShipTypes, getFilteredShips, ships }) => {
    useEffect(() => {
        getShipTypes()
    }, [])
    const [filter, setFilter] = useState({
        type: '',
        weight: null,
        homePort: ''
    });

    const [submitedFilter, setSubmitedFilter] = useState({
        type: '',
        weight: null,
        homePort: ''
    });

    const {
        type, weight, homePort
    } = filter

    const onChange = e => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();
        setSubmitedFilter(filter)
        getFilteredShips(filter);
    }


    return (
        <Fragment className='container'>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl className="bot-padding">
                            <InputLabel id="dropdown-label">Select Option</InputLabel>
                            <Select
                                labelId="dropdown-label"
                                id="dropdown"
                                name='type' onChange={e => onChange(e)} value={type}
                            >
                                <MenuItem value={null}>
                                    <em>None</em>
                                </MenuItem>
                                {types.map(optionType => <MenuItem value={optionType}>{optionType}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="bot-padding"
                            label="Enter Weight"
                            variant="outlined"
                            type="number"
                            name='weight'
                            InputProps={{
                                inputProps: { min: 0 } // Allow only non-negative values
                            }}
                            onChange={e => onChange(e)} value={weight}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className="bot-padding"
                            label="Enter Weight"
                            variant="outlined"
                            name='homePort' onChange={e => onChange(e)} value={homePort}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type='submit'>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <ShipTable filter={submitedFilter} />
        </Fragment>
    )
}

Filter.propTypes = {
    types: PropTypes.array,
    loading: PropTypes.bool,
    ships: PropTypes.array,
    getShipTypes: PropTypes.func.isRequired,
    getFilteredShips: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    types: state.ships.type,
    ships: state.ships.ships,
    // loading: state.loading
    // state: state
});

export default connect(mapStateToProps, { getShipTypes, getFilteredShips })(Filter);
