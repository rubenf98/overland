import React, { useState } from "react";
import styled from "styled-components";
import Table from "../common/TableContainer";
import dayjs from "dayjs";
import { Col, Input, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { PrimaryButton, SecundaryButton } from "../../helpers/style";
import RowOperation from "../common/RowOperation";
import StopPropagation from "../common/StopPropagation"
import { SearchIcon } from "../../../icons";


const Container = styled.section`
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
`;

const Action = styled.button`
    padding: 6px 12px;
    color: white;
    font-weight: bold;
    box-shadow: none;
    border: 0px;
    cursor: pointer;
    background-color: ${props => props.active ? "green" : "red"};
    
    &:nth-child(2) {
        margin-left: 5px;
    }

`;

const FilterContainer = styled(Row)`
    width: 100%;

    input::placeholder {
        color: #000;

        
    }

    svg {
        height: 15px;
        width: auto;
    }
`;

function TableContainer({ loading, data, meta, handlePageChange, onDelete, handleUpdateClick, handleCreateClick, handleFilters }) {
    const [filters, setFilters] = useState({ name: undefined, category: undefined });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => <Tag color="green">#{id}</Tag>,
        },
        {
            title: 'NOME',
            dataIndex: 'name',
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
        },
        {
            title: 'CONTACTO',
            dataIndex: 'phone',
        },
        {
            title: '',
            dataIndex: 'id',
            render: (id) => <Link to={"/painel/clientes/" + id}>ver detalhes</Link>
        },
        {
            title: 'Ações',
            dataIndex: 'id',
            render: (text, row) => (
                <StopPropagation>
                    <RowOperation
                        onDeleteConfirm={() => onDelete(row.id)} onUpdateClick={() => handleUpdateClick(row)}
                    />
                </StopPropagation>
            ),
        },
    ];

    return (
        <Container>
            <FilterContainer type="flex" justify="space-between" style={{ margin: "30px 0px" }} gutter={16}>
                <Col md={8}>
                    <Input size="large" allowClear value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} placeholder="Nome" suffix={<SearchIcon />} />
                </Col>
                <Col md={8}>
                    <Input size="large" allowClear value={filters.email} onChange={(e) => setFilters({ ...filters, email: e.target.value })} placeholder="Email" suffix={<SearchIcon />} />
                </Col>

                <Col md={8}>
                    {/* <PrimaryButton
                        onClick={handleCreateClick}
                        style={{ float: "right", marginLeft: "10px" }} type="primary"
                        loading={loading}
                    >
                        Adicionar
                    </PrimaryButton> */}

                    <SecundaryButton
                        onClick={() => handleFilters({ ...filters, date: filters.date && dayjs(filters.date).format('YYYY-MM-DD') })}
                        style={{ float: "right" }} type="primary"
                        loading={loading}
                    >
                        Pesquisar
                    </SecundaryButton>


                </Col>
            </FilterContainer>

            <Table
                loading={loading}
                data={data}
                meta={meta}
                columns={columns}
                handlePageChange={handlePageChange}
            />
        </Container>
    )
}

export default TableContainer;
