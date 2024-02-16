import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchInsurances } from '../../../redux/insurance/actions';

function InsuranceRemoteSelectContainer({ fetchInsurances, data, loading, value, onChange, mode }) {
    useEffect(() => {
        fetchInsurances()
    }, [])

    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            mode={mode}
        >
            {data.map((element) => (
                <Select.Option key={element.id} value={element.id}>{element.name.pt}</Select.Option>
            ))}
        </Select>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsurances: (filters) => dispatch(fetchInsurances(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.insurance.data,
        loading: state.insurance.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceRemoteSelectContainer);