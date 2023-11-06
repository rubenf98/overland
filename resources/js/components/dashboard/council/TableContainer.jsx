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
    const [filters, setFilters] = useState({ name: undefined });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => <Tag color="green">#{id}</Tag>,
        },
        {
            title: 'CONCELHO',
            dataIndex: 'name',
        },
        {
            title: 'PREÇO',
            dataIndex: 'price',
            render: (price) => price + "€",
        },
        {
            title: 'Ações',
            dataIndex: 'id',
            render: (text, row) => (
                <StopPropagation>
                    <RowOperation
                        onUpdateClick={() => handleUpdateClick(row)}
                    />
                </StopPropagation>
            ),
        },
    ];

    return (
        <Container>
            <FilterContainer type="flex" justify="space-between" style={{ margin: "30px 0px" }} gutter={16}>
                <Col md={12}>
                    <Input size="large" allowClear value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} placeholder="Concelho" suffix={<SearchIcon />} />
                </Col>

                <Col md={12}>
                    <SecundaryButton
                        onClick={() => handleFilters(filters)}
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
