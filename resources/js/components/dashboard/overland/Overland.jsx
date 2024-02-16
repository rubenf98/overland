import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { fetchOverlands, deleteOverland, setCurrentOverland } from "../../../redux/overland/actions";
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


function Overland(props) {
    const [filters, setFilters] = useState({});
    const [edit, setEdit] = useState(false);
    const [visible, setVisible] = useState(false);
    const { loading, data, meta, current } = props

    const handleFilters = (aFilters) => {
        setFilters({ ...filters, ...aFilters });
    }

    useEffect(() => {
        props.fetchOverlands(1, filters);
    }, [filters])

    const handlePageChange = (pagination) => {
        props.fetchOverlands(pagination.current, filters);
    }

    const handleUpdateClick = (row) => {
        setVisible(true);
        setEdit(true);
        props.setCurrentOverland(row);

    }

    const handleCreateClick = () => {
        setVisible(true);
        setEdit(false);
        props.setCurrentOverland({});

    }

    return (
        <div>
            <Banner>
                <h1>As minhas reservas</h1>
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
                onDelete={props.deleteOverland}
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
        fetchOverlands: (page, filters) => dispatch(fetchOverlands(page, filters)),
        deleteOverland: (id) => dispatch(deleteOverland(id)),
        setCurrentOverland: (overland) => dispatch(setCurrentOverland(overland)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.overland.loading,
        data: state.overland.data,
        meta: state.overland.meta,
        current: state.overland.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overland);