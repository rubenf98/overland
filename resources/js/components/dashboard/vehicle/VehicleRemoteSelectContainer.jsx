import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchVehicleSelector } from '../../../redux/vehicle/actions';

function VehicleRemoteSelectContainer({ fetchVehicleSelector, data, loading, value, onChange, mode }) {
    useEffect(() => {
        fetchVehicleSelector()
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
                <Select.Option key={element.id} value={element.id}>{element.title}</Select.Option>
            ))}
        </Select>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVehicleSelector: (filters) => dispatch(fetchVehicleSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.vehicle.selector,
        loading: state.vehicle.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleRemoteSelectContainer);