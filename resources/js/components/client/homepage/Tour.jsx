import React, { useEffect } from 'react'
import { Section, SectionTitle } from '../../helpers/style'
import styled from 'styled-components';
import { borderRadius, dimensions } from '../../../helper';
import { useNavigate } from 'react-router-dom';
import { fetchTours } from '../../../redux/activity/actions';
import { connect } from 'react-redux';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        margin-left: 0px;
    }
    
`;

const TourImage = styled.div`
    position: relative;
    width: ${props => props.width};
    height: 500px;
    background: ${props => "url(" + props.background + ")"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    padding: 20px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${borderRadius};
    }

    h3 {
        position: absolute;
        bottom: 40px;
        left: 40px;
        color: white;
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 0px;
    }

    @media (max-width: ${dimensions.lg}) {
        width: 50%;
    }
    
    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const widths = ["60%", "40%", "33%", "33%", "33%", "40%", "60%", "60%", "40%", "33%", "33%", "33%", "40%", "60%"];

function Tour(props) {
    const navigate = useNavigate();

    useEffect(() => {
        props.fetchTours(1, { categoryId: 3 });
    }, [])



    function handleItemClick(event, element, route) {
        navigate("/tours/" + route);
    }

    return (
        <Section>
            <SectionTitle style={{ textAlign: "center" }}>
                A local’s view on the best <span>tours</span> around the island
            </SectionTitle>
            <Container>
                {props.activities.map((activity, index) => (
                    <TourImage key={index} onClick={(e) => handleItemClick(e, this, activity.id)} width={widths[index]} >
                        <img src={activity.image} alt="" />
                        <h3>{activity.translation_names[props.language]}</h3>
                    </TourImage>

                ))}

            </Container>
        </Section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTours: (page, filters) => dispatch(fetchTours(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        activities: state.activity.tours,
        loading: state.activity.loading,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tour);