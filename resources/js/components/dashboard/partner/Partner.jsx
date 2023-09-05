import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { fetchPartners, deletePartner, setCurrentPartner, setPartnerStatus } from "../../../redux/partner/actions";
import FormContainer from './FormContainer';
import Banner from '../common/Banner';


function Partner(props) {
    const [filters, setFilters] = useState({});
    const [edit, setEdit] = useState(false);
    const [visible, setVisible] = useState(false);
    const { loading, data, meta, current } = props

    const handleFilters = (aFilters) => {
        setFilters({ ...filters, ...aFilters });
    }

    useEffect(() => {
        props.fetchPartners(1, filters);
    }, [filters])

    const handlePageChange = (pagination) => {
        props.fetchPartners(pagination.current, filters);
    }

    const handleUpdateClick = (row) => {
        setVisible(true);
        setEdit(true);
        props.setCurrentPartner(row);

    }

    const handleCreateClick = () => {
        setVisible(true);
        setEdit(false);
        props.setCurrentPartner({});

    }

    return (
        <div>
            <Banner>
                <h1>Parceiros</h1>
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
                onDelete={props.deletePartner}
                handlePageChange={handlePageChange}
                handleUpdateClick={handleUpdateClick}
                handleCreateClick={handleCreateClick}
                setCarStatus={props.setPartnerStatus}
                handleFilters={handleFilters}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPartners: (page, filters) => dispatch(fetchPartners(page, filters)),
        deletePartner: (id) => dispatch(deletePartner(id)),
        setCurrentPartner: (partner) => dispatch(setCurrentPartner(partner)),
        setPartnerStatus: (id, status) => dispatch(setPartnerStatus(id, status)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.partner.loading,
        data: state.partner.data,
        meta: state.partner.meta,
        current: state.partner.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Partner);