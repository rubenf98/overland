import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchCouncilSelector } from '../../../redux/council/actions';

function CouncilRemoteSelectContainer({ fetchCouncilSelector, data, loading, value, onChange, placeholder }) {
    useEffect(() => {
        fetchCouncilSelector()
    }, [])

    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            style={{ width: "100%" }}
            size="large"
            placeholder={placeholder}
            optionFilterProp="name"
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            {data.map((element) => (
                <Select.Option key={element.id} value={element.id}>{element.name}</Select.Option>
            ))}
        </Select>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCouncilSelector: (filters) => dispatch(fetchCouncilSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.council.selector,
        loading: state.council.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CouncilRemoteSelectContainer);