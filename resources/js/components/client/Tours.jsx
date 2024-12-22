import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { fetchActivities } from '../../redux/activity/actions';
import { connect } from 'react-redux';
import { dimensions } from '../../helper';
import { Button, Input, Pagination, Space } from 'antd';
import { Link } from 'react-router-dom';
import { handleForm } from '../../redux/application/actions';

const Title = styled.h1`
    font-size: clamp(30px, 4vw, 50px);
    margin-top: 0px;
`;

const SearchBar = styled(Space.Compact)`
    width: 100%;

    button {
        background-color: ${({ theme }) => theme.primary};

        
    }

    &:hover {
        button {
            background-color: ${({ theme }) => theme.primaryHover + "!important"} ;
        }
    }
`;

const PaginationContainer = styled(Pagination)`
    .ant-pagination-item-active {
        border-color:  ${({ theme }) => theme.primaryHover};

        a {
            color:  ${({ theme }) => theme.primaryHover};
        }
    }
`;


const Container = styled.section`
    width: 100%;
    max-width: 1600px;
    margin: auto auto 150px auto;
    display: block;
    padding: 20px;
    box-sizing: border-box;

    
`;

const ActivityContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 50px auto;
    gap: 30px;

    .activity {
        position: relative;
        flex-basis: calc(25% - 25px);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,.2);
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .content {
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex: 1;

            .title {
                display: flex;
                justify-content: space-between;
                gap: 10px;

                h3 {
                    font-size: clamp(18px, 2.5vw, 22px);
                    font-weight: bold;
                    margin: 0px;
                }

                p {
                    white-space: nowrap;
                    font-size: clamp(16px, 2vw, 18px);
                    font-weight: bold;
                    margin: 0px;

                    span {
                        font-size: clamp(14px, 2vw, 16px);
                    }
                }
            }

            .description {
                flex: 1;
            }

            .button-container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                margin: 40px auto 20px auto;

                button {
                    min-width: 150px;
                    padding: 8px 16px;
                    box-sizing: border-box;
                    border: 2px solid;
                    border-color: ${({ theme }) => theme.primary};
                    cursor: pointer;
                    text-transform: uppercase;
                    font-size: 16px;
                    font-weight: bold;
                }

                .primary {
                    color: white;
                    background-color: ${({ theme }) => theme.primary};
                }

                .secundary {
                    color: ${({ theme }) => theme.primary};
                    background-color: white;
                }
            }
        }

        @media (max-width: ${dimensions.xxl}) {
            width: 33%;
            flex-basis: calc(33% - 20px);;
        }

        @media (max-width: ${dimensions.xl}) {
            width: 50%;
            flex-basis: calc(50% - 15px);;
        }
        
        @media (max-width: ${dimensions.md}) {
            width: 100%;
            flex-basis: 100%;
        }
    }
`;

function Tours(props) {
    const [filters, setFilters] = useState({})
    const [page, setPage] = useState(1)

    const { text } = require('../../../assets/' + props.language + "/tours");

    useEffect(() => {
        props.fetchActivities(page, filters)
    }, [page])

    console.log(filters)
    return (
        <Container>
            {/* <Title>{text.title}</Title> */}

            <product-catalog-widget widget-id="f056d2f0-1c8b-4f45-b52c-0484571e533b"></product-catalog-widget>

            {/* <SearchBar>
                <Input onChange={(e) => setFilters({ search: e.target.value })} size='large' placeholder={text.search.placeholder} />
                <Button onClick={() => props.fetchActivities(1, filters)} size='large' type="primary">{text.search.button}</Button>
            </SearchBar>

            <ActivityContainer>
                {props.data.map((activity) => (
                    <div key={activity.id} className='activity'>
                        <img src={activity.image} alt="" />
                        <div className='content'>
                            <div className='title'>
                                <h3>{activity.translation_names[props.language]}</h3>
                                <p>{activity.price}€<span>/p</span></p>
                            </div>
                            <p className='description'>{activity.description1[props.language]}</p>

                            <div className='button-container'>
                                <button onClick={() => props.handleForm({ activity: [activity.category.id, activity.id] })} className='primary'>{text.buttons[0]}</button>
                                <Link to={"/tours/" + activity.id}>
                                    <button
                                        className='secundary'
                                    >
                                        {text.buttons[1]}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </ActivityContainer> */}

            {/* <PaginationContainer style={{ width: "100%" }} onChange={(e) => setPage(e)} align="center" current={page} total={props?.meta?.total} /> */}
        </Container>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivities: (page, filters) => dispatch(fetchActivities(page, filters)),
        handleForm: (formValues) => dispatch(handleForm(formValues)),

    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.activity.loading,
        data: state.activity.data,
        meta: state.activity.meta,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tours);