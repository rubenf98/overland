import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { Cascader, Col, DatePicker, Row, Select, message } from 'antd';
import { fetchCategorySelector } from "../../../redux/category/actions";
import { isActivityAvailable } from "../../../redux/activity/actions";
import { handleForm } from '../../../redux/application/actions';
import { connect } from 'react-redux';
import dayjs from "dayjs";
import { borderRadius, dimensions } from '../../../helper';
import { Link } from 'react-router-dom';


const fillBar = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const Container = styled.section`
    width: 100%;
    min-height: calc(100vh - 100px);
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const CustomCascader = styled(Cascader)`
    width: 100%;
    border: none;
    
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

    }

`;

const TextContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: white;
    padding: 0px 30px;
    min-height: calc(80vh - 100px);



    h2 {
        font-size: clamp(30px, 4vw, 90px);
        margin: 0px;
    }

    p {
        font-size: clamp(16px, 3vw, 22px);
        box-sizing: border-box;
        width: 50%;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        min-width: 150px;
        padding: 8px 16px;
        box-sizing: border-box;
        border: 1px solid;
        border-color: white;
        cursor: pointer;
        text-transform: uppercase;
        font-size: clamp(14px, 2vw, 16px);
        color: white;
        background-color: transparent;
    }


    .transition {
        position: absolute;
        z-index: 1;
        bottom: -2px;
        left: 0;
        width: 100%;
    }

    @media (max-width: ${dimensions.lg}) {
        p {
            width: 70%;
        }
    }

    @media (max-width: ${dimensions.md}) {
        p {
            width: 100%;
        }
    }

`;



const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    a {
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }

    img {
        height: 20px;
        width: 20px;
        margin: 5px;
    }

    @media (max-width: ${dimensions.md}) {
        position: absolute;
        flex-direction: row;
        bottom: 10px;
        right: 10px;
        
        a {
            width: 25px;
            height: 25px;
            border-radius: 25px;
        }

        img {
            height: 15px;
            width: 15px;
        }
    }
       
`;

const Background = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: -100px;
    left: 0;
    z-index: -1;
`;

const CarouselBar = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: white;
    padding: 0px 30px;
    box-sizing: border-box;

    div {
        border-top: 2px solid white;
        width: 25%;
        padding: 10px 0px;
        cursor: pointer;
        font-size: clamp(10px, 2vw, 16px);
    }

    .active {
        position: relative;
    }

    .active::before {
        content: "";
        position: absolute;
        left: 0;
        top: -2px;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
        animation: ${fillBar} 10s linear infinite;
        z-index: 3;
    }

`;

function Header(props) {
    const [backgroundIndex, setBackgroundIndex] = useState(0)
    const counter = useRef(0);

    const backgrounds = ["header_overland.jpg", "header_safari.jpg", "header_tours.jpg", "header_levada.jpg"]
    const [messageApi, contextHolder] = message.useMessage();


    useEffect(() => {
        if (counter.current < 100) {
            counter.current += 1;
            const timer = setTimeout(
                () => setBackgroundIndex(
                    backgroundIndex == (backgrounds.length - 1) ? 0 : (backgroundIndex + 1)
                ), 10000);

            return () => clearTimeout(timer);
        }

        return () => {
            counter.current = 0;
        };
    }, [backgroundIndex]);


    return (
        <Container>
            {contextHolder}
            <Background src={"/images/homepage/" + backgrounds[backgroundIndex]} alt="green leafs" />



            <div>
                <TextContainer>
                    <div>
                        <h2>{props.text.title}</h2>
                        <p>{props.text.subtitle}</p>
                        <Link to="/tours">
                            <button>{props.text.button}</button>
                        </Link>
                    </div>

                    <SocialContainer>
                        <a href="https://www.facebook.com/profile.php?id=61551065549062" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/facebook_white.svg" alt="facebook" />
                        </a>
                        <a href="https://api.whatsapp.com/send?l=en&phone=351910178500" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/whatsapp_white.svg" alt="whatsapp" />
                        </a>
                        <a href="https://www.instagram.com/overland_madeira?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram_white.svg" alt="instagram" />
                        </a>
                        <a href="mailto:overlandmadeira@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/email_white.svg" alt="email" />
                        </a>
                    </SocialContainer>


                </TextContainer>


                <CarouselBar>
                    {props.text.activities.map((activity, index) => (
                        <div onClick={() => setBackgroundIndex(index)} className={index == backgroundIndex && "active"}>
                            {activity}
                        </div>
                    ))}

                </CarouselBar>

            </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (formValues) => dispatch(handleForm(formValues)),
        fetchCategorySelector: (filters) => dispatch(fetchCategorySelector(filters)),
        isActivityAvailable: (filters) => dispatch(isActivityAvailable(filters))
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.category.selector,
        loading: state.blockDate.loading,
        dates: state.blockDate.data,
        activityAvailable: state.activity.activityAvailable
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);