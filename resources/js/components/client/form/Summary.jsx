import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Row } from 'antd';
import { dimensions } from '../../../helper';
import dayjs from 'dayjs';
import { connect } from "react-redux";

const Flex = styled(Row)`
    margin: 10px auto 60px auto;
    position: relative;
    width: 100%;
    color: white;
`;

const Detail = styled.div`
    font-size: 18px;
    width: 50%;
    padding: 10px 10px;
    box-sizing: border-box;
    font-weight: bold;
    color: white;

    .fieldname {
        display: block;
        font-weight: 300;
    }

    .old-price {
        font-size: 16px;
        text-decoration: line-through;
        opacity: .6;
        margin-left: 10px;
    }
`;

const Participant = styled(Detail)`
    width: 50%;
`;


const Feedback = styled.h3`
    font-size: 20px;
    font-weight: bold;  
    opacity: .8;
    padding: 0px 10px;
    color: white;
`;


function Summary({ text, data, categories, councils }) {
    const [activityName, setActivityName] = useState("");
    const [activityPrice, setActivityPrice] = useState(0);
    const [councilName, setCouncilName] = useState("");
    const [councilPrice, setCouncilPrice] = useState(0);

    useEffect(() => {
        categories.map((category) => {
            if (data.activity.length == 2) {
                category.activities.map((activity) => {
                    if (activity.id == data.activity[1]) {
                        setActivityName(activity.name);
                        var price = activity.price * data.participants;
                        if (price < activity.minimum) {
                            price = activity.minimum;
                        }
                        setActivityPrice(price);

                        var council = councils.find((val) => {
                            return val.id === data.council_id;
                        })

                        setCouncilName(council.name)
                        setCouncilPrice(council.price)
                    }
                })
            }
        })
    }, [data])


    return (
        <div>
            <Flex type="flex" justify="flex-start">
                <Detail><span className="fieldname">{text.details.date} </span> {data.date}</Detail>
                <Detail><span className="fieldname">{text.details.activity} </span> {activityName} </Detail>
                <Detail><span className="fieldname">{text.details.name} </span> {data.name} </Detail>
                <Detail><span className="fieldname">{text.details.email} </span> {data.email} </Detail>
                <Detail><span className="fieldname">{text.details.phone} </span> {data.phone} </Detail>
                <Detail><span className="fieldname">{text.details.country} </span> {data.country} </Detail>
                <Detail><span className="fieldname">{text.details.participants} </span> {data.participants} </Detail>
                <Detail><span className="fieldname">{text.details.council} </span> {councilName} </Detail>
                {/* <Detail><span className="fieldname">{text.details.councilPrice} </span> {councilPrice}€ </Detail> */}
                <Detail><span className="fieldname">{text.details.price} </span>  {activityPrice + councilPrice}€ </Detail>
            </Flex>

        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        categories: state.category.selector,
        councils: state.council.selector,
    };
};

export default connect(
    mapStateToProps,
    null
)(Summary);