import React, { useEffect } from 'react'
import { Section, SectionTitle } from '../../helpers/style'
import styled from 'styled-components';
import { borderRadius, dimensions } from '../../../helper';
import { Link, useNavigate } from 'react-router-dom';
import { fetchHighlightedActivities } from '../../../redux/activity/actions';
import { connect } from 'react-redux';
import { handleForm } from '../../../redux/application/actions';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: ${dimensions.md}) {
        margin-left: 0px;
    }
`;

const TourActivity = styled.div`
    position: relative;
    flex-basis: 31%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 300px;
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
                font-size: clamp(18px, 2.5vw, 22px);
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
                color: ${({ theme }) => theme.primary};
                background-color: white;
            }

            .secundary {
                border: 0px;
            }
        }
    }

    @media (max-width: ${dimensions.lg}) {
        width: 50%;
        flex-basis: 48%;
    }
    
    @media (max-width: ${dimensions.md}) {
        width: 100%;
        flex-basis: 100%;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    

    p {
        width: 50%;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;

        p {
            width: 100%;
        }

        br {
            display: none;
        }
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto 0px auto;
    
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
        color: white;
        background-color: ${({ theme }) => theme.primary};
    }
`;


function Tour(props) {
    const navigate = useNavigate();

    useEffect(() => {
        props.fetchHighlightedActivities();
    }, [])



    function handleItemClick(event, element, route) {
        navigate("/tours/" + route);
    }

    return (
        <Section>
            <Title id="tours">
                <SectionTitle>{props.text.title}</SectionTitle>
                <p>{props.text.subtitle}</p>
            </Title>
            <Container>
                {props.activities.map((activity, index) => (
                    <TourActivity key={index} >
                        <img src={activity.image} alt="" />
                        <div className='content'>
                            <div className='title'>
                                <h3>{activity.translation_names[props.language]}</h3>
                                <p>{activity.price}€<span>/p</span></p>
                            </div>
                            <p className='description'>{activity.description1[props.language]}</p>

                            {/* <div className='button-container'>
                                <button onClick={() => props.handleForm({ activity: [activity.category.id, activity.id] })} className='primary'>{props.text.buttons[0]}</button>
                                <button onClick={(e) => handleItemClick(e, this, activity.id)} className='secundary'>{props.text.buttons[1]}</button>
                            </div> */}
                        </div>
                    </TourActivity>

                ))}

            </Container>
            <ButtonContainer>
                <Link to="/tours">
                    <button>
                        {props.text.buttons[1]}
                    </button>
                </Link>
            </ButtonContainer>
        </Section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHighlightedActivities: () => dispatch(fetchHighlightedActivities()),
        handleForm: (formValues) => dispatch(handleForm(formValues)),

    };
};

const mapStateToProps = (state) => {
    return {
        activities: state.activity.highlightedData,
        loading: state.activity.loading,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tour);