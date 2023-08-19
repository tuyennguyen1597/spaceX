import { Fragment, useEffect, useState } from "react"
import { getShipTypes } from "../actions/ship"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Filter = () => {
    let options = []
    useEffect(() => {
        getShipTypes()
    }, []) 

    const [filter, setFilter] = useState({
        type: '',
        weight: '',
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
        console.log(filter)
    }

    
    return (
        <Fragment>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <select name='type' onChange={e => onChange(e)} value={type} >
                        <option value='0'>* Select Ship Type</option>
                        {options.map(option => <option value={option}>{option}</option>)}
                    </select>
                </div>
                <div className='form-group'>
                    <input type='number' placeholder='Weight' name='weight' onChange={e => onChange(e)} value={weight} />
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='Home Port' name='homePort' onChange={e => onChange(e)} value={homePort} />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
            </form>
        </Fragment>
    )
}


const mapStateToProps = (state) => ({
    ship: state.ship,
  });
  
  export default connect(mapStateToProps, { getShipTypes })(Filter);
  