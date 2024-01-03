import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from "styled-components";
import { borderRadius, dimensions } from '../../../helper';
import { Drawer, Select } from 'antd';
import { connect } from 'react-redux';
import { setLanguage } from '../../../redux/application/actions';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    color: white;
    text-transform: uppercase;
    padding: 0px 30px;
    box-sizing: border-box;

    .logo {
        height: 80px;
    }

    .language {
        .ant-select-selector, svg { 
            color: white;
        }
    }
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: capitalize;
    gap: 40px;

    a {
        font-size: clamp(16px, 2vw, 20px);
        color: ${props => props.color};
        text-decoration: none;
        font-weight: 500;
    }

    button {
        background-color: ${({ theme }) => theme.secundary};
        color: white;
        font-size: clamp(16px, 2vw, 20px);
        border-radius: ${borderRadius};
        padding: 12px 24px;
        box-sizing: border-box;
        box-shadow: 0px;
        border: 0px;
        cursor: pointer;

        img {
            height: 30px;
            width: 30px;
        }
    }

    .menu {
        display: none;
    }

    @media (max-width: ${dimensions.md}) {
        gap: 10px;

        a, .phone {
            display: none;
        }

        .menu {
            display: block;
        }

        button {
            padding: 8px 14px;

            img {
                height: 20px;
                width: 20px;
            }
        }
    }
    
`;


const CustomSelect = styled(Select)`
    min-width: 60px;
    

    .ant-select-selection-item {
        color: ${props => props.color};
        font-size: clamp(16px, 2vw, 20px);
    }

    @media (max-width: ${dimensions.md}) {
        order: 1;
    }

    .ant-select-selector{
        background: transparent !important;
        border-radius: 0px !important;
        border: 0px !important;
    }

    .ant-select-selection-item{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 20px;
    }
`;

const DropdownIcon = styled.img`
    width: 10px !important;
    color: black;
`;

const CustomDrawer = styled(Drawer)`

.ant-drawer-wrapper-body {
    position: relative;
}
    div {
        display: flex;
        align-items: center;
    }


    ul {
        list-style: none;
    }
    

    a {
        color: black !important;
        display: block;
        text-align: center;
        font-size: 24px;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            text-shadow:
            -1px -1px 0 white,
            1px -1px 0 white,
            -1px 1px 0 white,
            1px 1px 0 white;
        }
    }  
    
    .logo {
        width: 50%;
        margin: 30px auto 0px auto;
        display: block;
        min-width: 100px;
    }
`;

const Close = styled.img`
    box-sizing: border-box;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;

    @media (max-width: ${dimensions.md}) {
        display: flex;
        order: 2;
    }   
`;

function Navbar(props) {
    const { text } = require('../../../../assets/' + props.language + "/navbar");
    const [visible, setVisible] = useState(0);
    const location = useLocation();
    const [params, setParams] = useState({ color: "white", logo: "/images/logo_white.svg", dropdown: "/icon/down.svg" });

    useEffect(() => {
        if (location.pathname != "/") {
            setParams({ color: "black", logo: "/images/logo.svg", dropdown: "/icon/down_black.svg" })
        } else {
            setParams({ color: "white", logo: "/images/logo_white.svg", dropdown: "/icon/down.svg" })
        }
        console.log(location.pathname)
    }, [location])

    const handleLanguageChange = (e) => {
        localStorage.setItem("language", e);
        props.setLanguage(e);
        document.cookie = "language=" + e + "; path=/; expires=" + moment().add(10, "y").format("ddd, D MMM YYYY, H:mm:ss") + " GMT";

    };

    const onClose = () => {
        setVisible(0);
    };


    return (
        <Container>
            <Link to="/"><img className="logo" alt="logo" src={params.logo} /></Link>
            <PageContainer color={params.color}>
                <Link to="/about">{text.links[1]}</Link>
                <Link to="/contact">{text.links[2]}</Link>
                <button className='phone'>+351 910 178 500</button>
                <CustomSelect
                    color={params.color}
                    onChange={handleLanguageChange}
                    defaultValue={props.language}
                    suffixIcon={
                        <DropdownIcon src={params.dropdown} alt="open" />
                    }
                >
                    <Option value="en">  EN</Option>
                    <Option value="pt">  PT</Option>
                </CustomSelect>

                <button className='menu' onClick={() => setVisible(1)}>
                    <img
                        src="/icon/menu.svg"
                        alt="menu"
                    />
                </button>
            </PageContainer>



            <CustomDrawer
                style={{ zIndex: "15" }}
                placement="right"
                height={"100%"}
                width={"100%"}
                onClose={onClose}
                open={visible}
                closable={false}
            >
                <>
                    <Close
                        onClick={() => setVisible(0)}
                        src="/icon/close_black.svg"
                        alt="menu"
                    />
                    <div>
                        <ul style={{ padding: "0px" }}>
                            <li><Link onClick={() => setVisible(0)} to="/">{text.links[0]}</Link></li>
                            <li><Link onClick={() => setVisible(0)} to="/about">{text.links[1]}</Link></li>
                            <li><Link onClick={() => setVisible(0)} to="/contact">{text.links[2]}</Link></li>
                            <li>
                                <img className='logo' src="/images/logo.svg" alt="logo" />
                            </li>
                        </ul>
                    </div>
                </>
            </CustomDrawer>
        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage: (value) => dispatch(setLanguage(value)),
    };
};

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);