import React from 'react'
import Header from './common/Header'
import styled from "styled-components";
import { borderRadius, dimensions } from '../../helper';
import { Section } from '../helpers/style';
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';


const ParagraphContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div {
        width: 50%;
    } 
`;

const FaqContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 30px;
    margin: 30px 0px 100px 0px;
    flex-wrap: wrap;

    .contact-container {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 40px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25); 
        border-radius: ${borderRadius};

        button {
            margin-top: 30px;
            font-size: 18px;
            padding: 12px 40px; 
            border: 1px solid #000; 
            background-color: white;
            border-radius: ${borderRadius};
            cursor: pointer;
        }
    } 

    .ant-collapse {
        flex: 1;
        padding-right: 50px;
        box-sizing: border-box;
    }
`;


const FullImage = styled.img`
    width: 100%;
    border-radius: ${borderRadius};
    margin: 100px auto;
    display: block;
`;

const Content = styled.div`
    margin-bottom: 100px;

    h1 {
        text-align: center;
        font-size: clamp(30px, 3vw, 70px);
    }

    h2 {
        font-size: clamp(26px, 2vw, 50px);
    }
    
    @media (max-width: ${dimensions.md}) {
        box-sizing: border-box;
        padding: 0px 20px;
    }

    @media (max-width: ${dimensions.md}) {
        margin: 100px 0px;
    }

`;
function About() {

    const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
`;
    const items = [
        {
            key: '1',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '6',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '7',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '8',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '9',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
        {
            key: '10',
            label: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
            children: <p>{text}</p>,
        },
    ];

    return (
        <Section>
            <Content>
                <h1>Born from a desire to explore</h1>
                <FullImage src="/images/about/explore.jpg" alt="" />
                <ParagraphContainer>
                    <div>
                        <p>Welcome to Overland, your gateway to unparalleled exploration on the stunning island of Madeira. With a deep passion for nature and a commitment to providing exceptional experiences, we specialize in offering guided levada tours, exhilarating hiking expeditions, and convenient van rentals for unforgettable camping escapades.</p>
                        <p>At Overland, we believe in uncovering the hidden gems of Madeira's breathtaking landscape. Our seasoned guides are not only experts in navigating the intricate levada networks, but they're also eager to share their extensive knowledge about the island's flora, fauna, and cultural heritage. Whether you're a novice hiker or an experienced adventurer, our diverse range of tours caters to all levels of expertise.</p>
                    </div>
                    <div>
                        <p>Our mission goes beyond mere travel – it's about crafting lasting memories. Imagine the rush of discovery as you traverse lush forests, cross charming footbridges over cascading streams, and take in panoramic vistas from mountain summits. With a strong commitment to sustainable and responsible tourism, we ensure that your exploration leaves a positive impact on the environment and local communities.</p>
                        <p>We understand that every traveler seeks a unique experience. That's why we offer not only guided tours but also the opportunity to create your adventure with our van rental service. Pack your camping gear and hit the road at your own pace, choosing your own routes and camping spots while knowing that our team is just a call away for any assistance you may need.</p>
                    </div>
                </ParagraphContainer>
                <FullImage src="/images/about/activities.jpg" alt="" />

                <h2>Frequently asked questions</h2>
                <FaqContainer>
                    <Collapse defaultActiveKey={['1']} ghost items={items} />
                    <div className='contact-container'>
                        <div>
                            <h3>Can’t find an answer?</h3>
                            <p>If you don't find the answers here please don't hesitate to get in touch.</p>
                            <Link to="/contact"><button>Contact us</button></Link>

                        </div>
                    </div>
                </FaqContainer>
            </Content>
        </Section>
    )
}

export default About