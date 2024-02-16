import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { fetchVehicles, deleteVehicle, setCurrentVehicle, setVehicleStatus } from "../../../redux/vehicle/actions";
import FormContainer from './FormContainer';

const Banner = styled.section`
    background: url("/images/dashboard/banner.svg");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 20vh;
    color: white;
    display: flex;
    align-items: flex-end;

    h1 {
        padding: 0px 0px 40px 40px;
        margin: 0px;
        box-sizing: border-box;
        font-size: 36px;
    }
`;


function Vehicle(props) {
    const [filters, setFilters] = useState({});
    const [edit, setEdit] = useState(false);
    const [visible, setVisible] = useState(false);
    const { loading, data, meta, current } = props

    const handleFilters = (aFilters) => {
        setFilters({ ...filters, ...aFilters });
    }

    useEffect(() => {
        props.fetchVehicles(1, filters);
    }, [filters])

    const handlePageChange = (pagination) => {
        props.fetchVehicles(pagination.current, filters);
    }

    const handleUpdateClick = (row) => {
        setVisible(true);
        setEdit(true);
        props.setCurrentVehicle(row);

    }

    const handleCreateClick = () => {
        setVisible(true);
        setEdit(false);
        props.setCurrentVehicle({});

    }

    return (
        <div>
            <Banner>
                <h1>Os meus veículos</h1>
            </Banner>

            <FormContainer
                visible={visible}
                handleClose={() => setVisible(false)}
                current={current}
                edit={edit}
            />

            <TableContainer
                data={data}
                meta={meta}
                loading={loading}
                onDelete={props.deleteVehicle}
                handlePageChange={handlePageChange}
                handleUpdateClick={handleUpdateClick}
                handleCreateClick={handleCreateClick}
                setVehicleStatus={props.setVehicleStatus}
                handleFilters={handleFilters}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVehicles: (page, filters) => dispatch(fetchVehicles(page, filters)),
        deleteVehicle: (id) => dispatch(deleteVehicle(id)),
        setCurrentVehicle: (vehicle) => dispatch(setCurrentVehicle(vehicle)),
        setVehicleStatus: (id, status) => dispatch(setVehicleStatus(id, status)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.vehicle.loading,
        data: state.vehicle.data,
        meta: state.vehicle.meta,
        current: state.vehicle.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);