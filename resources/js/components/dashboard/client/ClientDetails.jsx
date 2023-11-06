import React, { useEffect, useState } from 'react'
import Banner from '../common/Banner'
import { fetchClient } from '../../../redux/client/actions';
import { fetchReservations } from '../../../redux/reservation/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'antd';
import styled from "styled-components";
import TableContainer from '../reservation/TableContainer';

const Content = styled(Row)`
    margin: 50px 0px;
    padding: 0px 30px;
    box-sizing: border-box;
`;

const Field = styled.div`
    margin-bottom: 20px;
    
    h4 {
        opacity: .7;
        
        &::after {
            content: ":";
        }
    }

    p, h4 {
        margin: 0px;
        font-size: 16px;
    }

`;

function ClientDetails(props) {
    const { clientId } = useParams();
    const [filters, setFilters] = useState({ client: clientId, pagination: 1 });
    const { current, loading, meta, data } = props;

    useEffect(() => {
        if (clientId) {
            props.fetchClient(clientId)
            props.fetchReservations(filters.pagination, filters);

            setFilters({ ...filters, client: clientId });
        }

    }, [clientId])

    const handlePageChange = (pagination) => {
        props.fetchReservations(pagination.current, filters);
        setFilters({ ...filters, pagination: pagination.current });
    }

    const handleFilters = (aFilters) => {
        setFilters({ ...filters, ...aFilters, pagination: 1 });
        props.fetchReservations(1, { ...filters, ...aFilters });
    }


    return (
        <div>
            <Banner text={"Cliente #" + clientId} />

            <Content type="flex" align='flex-start' gutter={16}>
                <Col span={12}>
                    <Field>
                        <h4>Nome</h4>
                        <p>{current.name}</p>
                    </Field>
                </Col>
                <Col span={12}>
                    <Field>
                        <h4>Email</h4>
                        <p>{current.email}</p>
                    </Field>
                </Col>
                <Col span={6}>
                    <Field>
                        <h4>Nº telemóvel</h4>
                        <p>{current.phone}</p>
                    </Field>
                </Col>

                <Col span={6}>
                    <Field>
                        <h4>ID / Passaporte</h4>
                        <p>{current.cc}</p>
                    </Field>
                </Col>
                <Col span={6}>
                    <Field>
                        <h4>NIF</h4>
                        <p>{current.nif}</p>
                    </Field>
                </Col>

                <Col span={6}>
                    <Field>
                        <h4>País</h4>
                        <p>{current.country}</p>
                    </Field>
                </Col>
            </Content>


            <TableContainer
                data={data}
                meta={meta}
                loading={loading}
                handlePageChange={handlePageChange}
                handleFilters={handleFilters}
            />
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchClient: (id) => dispatch(fetchClient(id)),
        fetchReservations: (page, filters) => dispatch(fetchReservations(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        meta: state.reservation.meta,
        data: state.reservation.data,
        current: state.client.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails);