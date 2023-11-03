import React from 'react'
import Header from './common/Header'
import styled from "styled-components";
import { borderRadius, dimensions } from '../../helper';
import { Section } from '../helpers/style';
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


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
function About(props) {
    const { text } = require('../../../assets/' + props.language + "/about");

    return (
        <Section>
            <Content>
                <h1>{text.title}</h1>
                <FullImage src="/images/about/explore.jpg" alt="" />
                <ParagraphContainer>
                    <div>
                        <p>{text.paragraphs[0]}</p>
                        <p>{text.paragraphs[1]}</p>
                    </div>
                    <div>
                        <p>{text.paragraphs[2]}</p>
                        <p>{text.paragraphs[3]}</p>
                    </div>
                </ParagraphContainer>
                <FullImage src="/images/about/activities.jpg" alt="" />

                <h2>{text.faqTitle}</h2>
                <FaqContainer>
                    <Collapse defaultActiveKey={['1']} ghost items={text.faq} />
                    <div className='contact-container'>
                        <div>
                            <h3>{text.contact.title}</h3>
                            <p>{text.contact.description}</p>
                            <Link to="/contact"><button>{text.contact.button}</button></Link>

                        </div>
                    </div>
                </FaqContainer>
            </Content>
        </Section>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(About);