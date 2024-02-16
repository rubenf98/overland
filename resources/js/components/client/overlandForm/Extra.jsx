import React, { useEffect, useState } from 'react'
import styled, { withTheme } from "styled-components";
import { Checkbox, Select } from 'antd';
import { fetchExtras } from "../../../redux/extra/actions";
import { connect } from "react-redux";
import { dimensions } from '../../../helper';

const Container = styled.div`
    width: 100%;

    @media (max-width: ${dimensions.xl}) {
        width: 40%;
    }

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    h2 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 0px;
    }

    .checkbox-container {
        gap: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ant-checkbox-wrapper {
            font-size: 16px;

            .ant-checkbox {
                margin-right: 10px;
            }

        }

        
        p {
            font-weight: 700;

            .hide {
                @media (max-width: ${dimensions.sm}) {
                    display: none;
                }
            }
        }
    }

`;

function Extra(props) {
    const { text, data, extras, extraPrice, language, days } = props;

    const [multiple, setMultiple] = useState(1)

    useEffect(() => {
        props.fetchExtras();
    }, [])


    function getAllIndexes(arr, val) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }

    function removeExtras(indexes, extrasCopy, aPrice) {
        var sumPrices = 0;

        for (const i of indexes.reverse()) {
            extrasCopy.splice(i, 1);
            sumPrices += parseFloat(aPrice);
        }

        return extraPrice - sumPrices
    }

    function addExtras(extra, aMultiple, extrasCopy) {
        if (extra.max > 1) {
            iteratorMax = aMultiple
        }

        var newIds = [];
        var newPrice = 0;
        for (let i = 0; i < iteratorMax; i++) {
            newIds.push(extra.id)
            newPrice += parseFloat(aPrice)
        }

        extrasCopy = extrasCopy.concat(newIds);
        props.setExtraPrice(extraPrice + newPrice);
    }



    function handleClick(value, extra, aMultiple = multiple) {
        var iteratorMax = 1;

        var indexes = getAllIndexes(extras, extra.id);

        var extrasCopy = [...extras];
        var aPrice = extra.type == "uni" ? extra.price : (extra.price * days);

        if (indexes.length > 0 && !value) {
            var cExtraPrice = removeExtras(indexes, extrasCopy, aPrice)
            props.setExtraPrice(cExtraPrice);
        } else if (indexes.length == 0 && value) {

            if (extra.max > 1) {
                iteratorMax = aMultiple
            }

            var newIds = [];
            var newPrice = 0;
            for (let i = 0; i < iteratorMax; i++) {
                newIds.push(extra.id)
                newPrice += parseFloat(aPrice)
            }

            extrasCopy = extrasCopy.concat(newIds);
            props.setExtraPrice(extraPrice + newPrice);
        }

        props.setExtras(extrasCopy);



    }

    function handleMultiple(value, extra) {
        setMultiple(value)
        var indexes = getAllIndexes(extras, extra.id);
        var aPrice = extra.type == "uni" ? extra.price : (extra.price * days);
        var extrasCopy = [...extras];

        var cExtraPrice = removeExtras(indexes, extrasCopy, aPrice)

        var newIds = [];
        var newPrice = 0;
        for (let i = 0; i < value; i++) {
            newIds.push(extra.id)
            newPrice += parseFloat(aPrice)
        }

        extrasCopy = extrasCopy.concat(newIds);
        props.setExtraPrice(cExtraPrice + newPrice);

        props.setExtras(extrasCopy);
    }
    console.log(extras)
    return (

        <Container>
            <h3>{text.titles[2]}</h3>

            {data.map((extra) => (
                <div key={extra.id}>
                    {parseInt(extra.visible) ?
                        <div className='checkbox-container'>
                            <Checkbox checked={extras.includes(extra.id)} onChange={(e) => handleClick(e.target.checked, extra)}>
                                {extra.name[language]}
                            </Checkbox>
                            <div className='checkbox-container'>
                                {extra.max > 1 &&
                                    <Select onChange={(e) => handleMultiple(e, extra)} defaultValue={multiple} style={{ width: "100px" }} options={[
                                        {
                                            value: 1,
                                            label: '1',
                                        },
                                        {
                                            value: 2,
                                            label: '2',
                                        },
                                        {
                                            value: 3,
                                            label: 3,
                                        },
                                    ]} />
                                }
                                <p>{extra.price}€</p>
                            </div>

                        </div>
                        : <></>}
                </div>

            ))
            }
        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExtras: () => dispatch(fetchExtras()),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.extra.data,
        loading: state.extra.loading,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Extra));