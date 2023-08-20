import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilteredShips } from "../actions/ship"

const ShipTable = ({ ships, filter, getFilteredShips }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    console.log(ships)
    useEffect(() => {
        getFilteredShips(filter, { page: page })
    }, [page, rowsPerPage, getFilteredShips])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        getFilteredShips(filter, { page: newPage })
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        !ships || ships.length == 0 ? <p>No Data</p> : <Paper>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ship Type</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Home Port</TableCell>
                            <TableCell>Ship Name</TableCell>
                            <TableCell>Class</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ships.data.map((ship) => (
                            <TableRow key={ship.id}>
                                <TableCell>{ship.type}</TableCell>
                                <TableCell>{ship.weight ? `${ship.weight} kg` : ship.weight}</TableCell>
                                <TableCell>{ship.homePort}</TableCell>
                                <TableCell>{ship.name}</TableCell>
                                <TableCell>{ship.class}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={ships.meta.itemCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>

    );
};


ShipTable.propTypes = {
    getFilteredShips: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    types: state.ships.type,
    ships: state.ships.ships
});

export default connect(mapStateToProps, { getFilteredShips })(ShipTable);

