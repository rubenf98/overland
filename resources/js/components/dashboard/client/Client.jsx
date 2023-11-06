import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { fetchClients, deleteClient, setCurrentClient } from "../../../redux/client/actions";
import FormContainer from './FormContainer';
import Banner from '../common/Banner';


function Client(props) {
    const [filters, setFilters] = useState({});
    const [edit, setEdit] = useState(false);
    const [visible, setVisible] = useState(false);
    const { loading, data, meta, current } = props

    const handleFilters = (aFilters) => {
        setFilters({ ...filters, ...aFilters });
    }

    useEffect(() => {
        props.fetchClients(1, filters);
    }, [filters])

    const handlePageChange = (pagination) => {
        props.fetchClients(pagination.current, filters);
    }

    const handleUpdateClick = (row) => {
        setVisible(true);
        setEdit(true);
        props.setCurrentClient(row);

    }

    const handleCreateClick = () => {
        setVisible(true);
        setEdit(false);
        props.setCurrentClient({});

    }

    return (
        <div>
            <Banner>
                <h1>Listagem de clientes</h1>
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
                onDelete={props.deleteClient}
                handlePageChange={handlePageChange}
                handleUpdateClick={handleUpdateClick}
                handleCreateClick={handleCreateClick}
                handleFilters={handleFilters}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: (page, filters) => dispatch(fetchClients(page, filters)),
        deleteClient: (id) => dispatch(deleteClient(id)),
        setCurrentClient: (client) => dispatch(setCurrentClient(client)),

    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.client.loading,
        data: state.client.data,
        meta: state.client.meta,
        current: state.client.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);