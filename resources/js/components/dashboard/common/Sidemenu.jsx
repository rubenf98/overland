import { Menu } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../../redux/auth/actions';
import { connect } from 'react-redux';

const Logo = styled.img`
    width: 70px;
    margin: auto;
    display: block;
`;

const Container = styled.div`
    min-height: 100vh;
    width: 100px;

    .ant-menu {
        height: 100%;
        width: 100px;

        .ant-menu-item {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon {
            width: 22px;
            height: auto;
            margin: auto;
            display: block;
        }
    }

   

    .ant-menu-item:nth-child(1) {
        margin-bottom: 30px !important;
        margin-top: 20px !important;
        height: 60px;
        pointer-events: none;
        cursor: default;

    }

    .ant-menu.ant-menu-dark {
        background-color: ${({ theme }) => theme.dashboardBackground};
        color: black;
    }

    .ant-menu-item-selected {
        background-color: ${({ theme }) => theme.dashboardBackground + " !important"};

        span {
            padding: 10px;
            box-sizing: border-box;
            background-color: #fff !important;
        }
        
    }
    
    
`;

function Sidemenu(props) {

    const items = [
        {
            label: <Logo src="/images/logo.svg" alt="logo" />,
        },
        {
            label: <Link to="/painel/"><img className='icon' src="/icon/dashboard/dashboard.svg" /></Link>,
            key: '',
        },
        {
            label: <Link to="/painel/reservas"><img className='icon' src="/icon/dashboard/reservations.svg" /></Link>,
            key: 'reservas',
        },
        {
            label: <Link to="/painel/datas"><img className='icon' src="/icon/dashboard/blocked.svg" /></Link>,
            key: 'datas',
        },
        {
            label: <Link to="/painel/atividades"><img className='icon' src="/icon/dashboard/activity.svg" /></Link>,
            key: 'carros',
        },
        {
            label: <Link to="/painel/overlands"><img className='icon' src="/icon/dashboard/overland.svg" /></Link>,
            key: 'overland',
        },
        {
            label: <Link to="/painel/veiculos"><img className='icon' src="/icon/dashboard/vehicle.svg" /></Link>,
            key: 'veiculos',
        },
        {
            label:
                <Link to="/painel/concelhos">
                    <img className='icon' src="/icon/dashboard/council.svg" />
                </Link>,
            key: 'concelhos',
        },
        {
            label:
                <Link to="/painel/clientes">
                    <img className='icon' src="/icon/dashboard/client.svg" />
                </Link>,
            key: 'clientes',
        },
        {
            label: <Link to="/painel/logs">
                <img className='icon' src="/icon/dashboard/config.svg" />
            </Link>,
            key: 'logs',
        },
        {
            label: <img onClick={props.logout} className='icon' src="/icon/dashboard/logout.svg" />,
            key: 'logout',
        },

    ];
    return (
        <Container>
            <Menu
                theme="dark"
                defaultSelectedKeys={['']}
                mode="vertical"
                items={items}
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.currentUser,
        loading: state.reservation.loading,
        data: state.reservation.relevantData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);