
import { Input, Checkbox, Select, InputNumber, DatePicker, Cascader } from 'antd';
import styled, { css } from "styled-components";

export const baseInputStyles = css`
    width: 100%;
    margin: 10px 0px;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent !important;
    color: #ffffff;

    .ant-input-status-error{
        background: transparent !important;  
    }

    &:focus,
    &:active, &:hover {
        outline: none;
        border: none !important;
        border-bottom: 1px solid white !important;
        appearance: none;
        box-shadow: none;
    }

    &::placeholder {
        color: #fff;
    }

    &:focus,
    &:active, &:hover {
        border-color: ${props => props.colored ? "#fff !important" : "white"};
    }
`;

export const CustomCascader = styled(Cascader)`
    ${baseInputStyles}    
    .ant-select-selection-item {
        color: #fff;
    }
    
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    .ant-select-selector {
        background-color: transparent !important;
    }

    .ant-select-selection-placeholder {
        color: white;
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector{
            border-bottom: 1px solid white !important;
        }   
    }

    svg {
        color: white;
    }
`;

export const CustomSelect = styled(Select)`
    ${baseInputStyles}    

    .ant-select-selection-item {
        color: #fff;
    }

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    .ant-select-selector {
        background-color: transparent !important;
    }

    .ant-select-selection-placeholder {
        color: white;
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector{
            border-bottom: 1px solid white !important;
        }   
    }

    svg {
        color: white;
    }
`;



export const CustomDatePicker = styled(DatePicker)`
    ${baseInputStyles} 
      
    .ant-picker-input > input {
        color: #ffffff;
    } 
    
    .ant-picker-focused:not(.ant-picker-disabled).ant-picker:not(.ant-picker-customize-input) .ant-picker-input, .ant-picker-input {
        border: none !important;
        box-shadow: none !important;
        
    }

    .ant-picker-input, .ant-picker {
        background-color: transparent !important;
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

        .ant-picker-focused:not(.ant-picker-disabled).ant-picker:not(.ant-picker-customize-input) .ant-picker-input, .ant-picker-input{
            border: none !important;
        }   
    }

    svg {
        color: white;
    }
`;


export const CustomInput = styled(Input)`
    ${baseInputStyles}

    
`;


export const CustomTextArea = styled(Input.TextArea)`
    ${baseInputStyles}

    .ant-input {
        border: 0px;
        background-color: transparent;
    }
`;


export const CustomInputNumber = styled(InputNumber)`
    ${baseInputStyles} 
    input {
        color: white !important;
        
    }
    .ant-input-number-input::placeholder {
        color: white;
    }
    /* .ant-input-number-focused {
        border: 0px;
        outline: 0px;
        box-shadow: none;
        color: white;
    } */
`;


export const CustomCheckbox = styled(Checkbox)`
    color: #d6d6d6;

    .ant-checkbox-inner {
        background: transparent
    }

    .ant-checkbox-checked, .ant-checkbox-inner {
        border-color: white !important;
    }

    .ant-checkbox-checked,.ant-checkbox  {
        border-color: white;

        &:after {
            border-color: white !important;
        }
    }

    &:focus,
    &:active, &:hover {

        .ant-checkbox-inner, .ant-checkbox-checked  {
            border-color: white;
        }
        
    }
`;