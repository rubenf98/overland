import React, { useRef, useEffect } from 'react'
import { getCarouselBreakpoints, dimensions, borderRadius } from '../../../helper';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";
import { SectionTitle } from '../../helpers/style';
import { fetchLevadas } from '../../../redux/activity/actions';
import { connect } from 'react-redux';

const Container = styled.div`
    margin: 100px 0px 100px calc((100vw - 1600px) / 2);
    box-sizing: border-box;
    position: relative;

    .button-control {
            position: absolute;
            bottom: -70px; 
            opacity: .7;
            padding: 10px;
            box-sizing: border-box;
            z-index: 5;

            img {
                width:18px;
            }
        }

        .right {
            right: 45px;
        }

        .left {
            left: 45px;
        }

    @media (max-width: ${dimensions.md}) {
        margin-left: 0px;
    }
    
`;


const CarouselContainer = styled(Carousel)`
    min-height: 300px;
    width: 100%;
    position: relative;

    .image-item {
        padding-right: 50px;

        @media (max-width: ${dimensions.sm}) {
            padding: 0px;
        }
    }    
`;

const Item = styled.div`
    width: 100%;
    z-index: 1;
   

    .image-container {
        
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 0px;
        padding-top: 120%;
        background: ${props => "url(" + props.background + ")"};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: scale 1s ease-in-out;
        cursor: pointer;
        border-radius: ${borderRadius};

        @media (min-width: ${dimensions.md}) {
            &:hover {
                scale: 1.1;
                .overlay {
                    opacity: .5;
                }
            }
        }

        @media (min-width: ${dimensions.md}) {
            &:hover {
                scale: 1.1;
                .overlay {
                    opacity: .5;
                }
            }
        }

        .overlay {
            position: absolute;
            background-image: ${props => "linear-gradient(to bottom, rgba(255, 255, 255, 0), " + props.backgroundWithOpacity + " 80%, " + props.backgroundcolor + ")"};
            top: 0; bottom: 0;left: 0%; right: 0;
            width: 100%;
            height: 100%;
            transition: opacity .5s ease-in-out;
            opacity: 1;
        }

        
    }

    


    .info {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;

        h3 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 0px;
        }
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

function Levada(props) {
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        props.fetchLevadas({ categoryId: 2, active: 1 });
    }, [])



    function handleItemClick(event, element, route) {
        navigate("/levadas/" + route);
    }

    return (
        <Container>

            <Title id="levadas">
                <SectionTitle>{props.text.title}</SectionTitle>
                <p>{props.text.subtitle}</p>
            </Title>

            <CarouselContainer
                autoPlay={false}
                interval={200000}
                infinite
                arrows
                draggable={false}
                itemClass="image-item"
                partialVisible
                swipeable
                transitionDuration={400}
                responsive={getCarouselBreakpoints([1, 1, 2, 3, 3])}
                ref={carouselRef}
            >
                {props.activities.map((activity, index) => (

                    <div>
                        <Item
                            background={activity.image}
                        >

                            <div className='image-container'>
                                <div className='overlay' onClick={(e) => handleItemClick(e, this, activity.id)} />

                            </div>

                            <div className='info' >
                                <h3>{activity.translation_names[props.language]}</h3>
                            </div>
                        </Item>

                    </div>

                ))}

            </CarouselContainer>
        </Container>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchLevadas: (page, filters) => dispatch(fetchLevadas(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        activities: state.activity.levadas,
        loading: state.activity.loading,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levada);