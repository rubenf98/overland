import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { fetchCouncils, deleteCouncil, setCurrentCouncil } from "../../../redux/council/actions";
import FormContainer from './FormContainer';
import Banner from '../common/Banner';
import Simulator from '../common/Simulator';


function Council(props) {
    const [filters, setFilters] = useState({});
    const [edit, setEdit] = useState(false);
    const [visible, setVisible] = useState(false);
    const { loading, data, meta, current } = props

    const handleFilters = (aFilters) => {
        setFilters({ ...filters, ...aFilters });
    }

    useEffect(() => {
        props.fetchCouncils(1, filters);
    }, [filters])

    const handlePageChange = (pagination) => {
        props.fetchCouncils(pagination.current, filters);
    }

    const handleUpdateClick = (row) => {
        setVisible(true);
        setEdit(true);
        props.setCurrentCouncil(row);

    }

    const handleCreateClick = () => {
        setVisible(true);
        setEdit(false);
        props.setCurrentCouncil({});

    }

    return (
        <div>
            <Banner>
                <h1>Listagem de counciles</h1>
            </Banner>

            <Simulator />

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
                onDelete={props.deleteCouncil}
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
        fetchCouncils: (page, filters) => dispatch(fetchCouncils(page, filters)),
        deleteCouncil: (id) => dispatch(deleteCouncil(id)),
        setCurrentCouncil: (council) => dispatch(setCurrentCouncil(council)),

    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.council.loading,
        data: state.council.data,
        meta: state.council.meta,
        current: state.council.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Council);