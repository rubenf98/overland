import React, { useEffect, useState } from 'react'
import { Section, SectionTitle } from '../../helpers/style';
import { fetchVehicles, fetchDisabledDates } from '../../../redux/vehicle/actions';
import { connect } from 'react-redux';
import styled from "styled-components";
import dayjs from "dayjs"
import { Calendar, DateObject } from "react-multi-date-picker"
import { borderRadius, dimensions } from '../../../helper';
import { useNavigate } from 'react-router-dom';

const FlexContainer = styled.div`
    display: flex;
    gap: 50px;

    
    .container {
        width: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }

    
    button {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 12px 28px;
        box-sizing: border-box;
        border-radius: ${borderRadius};
        cursor: pointer;
        border: 0px;
        font-size: clamp(16px, 2vw, 20px);
        margin: 10px 0px 20px 0px;
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;

        .container {
            width: 100%;
        }
    }

`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    .description {
        flex: 1;
        margin-bottom: 30px;
    }

    .price-disclaimer {
        opacity: .4;
        text-transform: uppercase;
        font-weight: bold;
        font-size: clamp(16px, 2vw, 18px);
        margin-bottom: 0px;
    }

    .price {
        font-size: clamp(24px, 3vw, 36px);
    }

    h3 {
        font-size: clamp(32px, 5vw, 62px);
        margin: 0px 0px 10px 0px;
    }
`;

const DatePicker = styled(Calendar)`
    width: 100%;

    .in-service {
        background-color: #cc0303;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .rmdp-range:has(.in-service) {
        background-color: #cc0303;
    }


    .rmdp-border-bottom {
        border-bottom: 0px;
    }

    .rmdp-calendar {
        width: 100%;
        box-sizing: border-box;

        .rmdp-week {
            gap: 4px;
            justify-content: space-between;
            margin-bottom: 4px;
        }
        
        .rmdp-day-picker > div {
            width: 100%;
        }
    }
`;

function Overland(props) {
    const navigate = useNavigate();
    const { vehicles, language, disabledDates } = props;
    const [value, setValue] = useState(undefined);
    const [disabledRange, setDisabledRange] = useState([]);
    const { text } = props;

    useEffect(() => {
        props.fetchVehicles()
        props.fetchDisabledDates({ vehicle_id: 1 })
    }, [])


    function MyPlugin(props) {
        return <button onClick={() => navigate("/overland?vehicleId=" + props.vehicle + "&from=" + value[0].format() + "&to=" + value[1].format())}>{text.button}</button>
    }

    const onRangeChange = range => {
        if (range.length == 1) {
            const date = new DateObject(range[0])
            var minDate = undefined
            var willDisable = [];

            for (let index = 0; index < 2; index++) {
                minDate = date.add(1, 'days').format();
                willDisable.push(minDate);

            }

            setDisabledRange(willDisable)
            setValue(range)

        } else if (range.length == 2) {
            setDisabledRange([]);
            var isRangeBlocked = false;

            for (let index = 0; index < disabledDates.length; index++) {
                var disabledDate = new DateObject(disabledDates[index]);
                if (range[0] <= disabledDate && range[1] >= disabledDate) {
                    isRangeBlocked = true;
                    break;
                }
            }
            setValue(isRangeBlocked ? undefined : range);
        } else {
            setDisabledRange([]);
            setValue(range);
        }
    };

    return (
        <Section>
            <SectionTitle id="overland"></SectionTitle>

            <div>
                {vehicles.map((vehicle) => (
                    <FlexContainer>
                        <div className='container'>
                            <img src={vehicle.image} alt="" />
                        </div>

                        <InfoContainer className='container'>
                            <h3>{vehicle.title}</h3>
                            <p className='price-disclaimer'>{text.price.from}</p>
                            <div className='price'>{vehicle.prices.reduce((prev, curr) => parseFloat(prev.price) < parseFloat(curr.price) ? prev : curr).price}€/{text.price.day}</div>
                            <p className='description'>{vehicle.description[language]}</p>
                            <DatePicker
                                value={value}
                                range
                                shadow={false}
                                hideWeekDays
                                rangeHover
                                startDate
                                mapDays={({ date }) => {
                                    let isTooSoon = disabledRange.includes(date.format('YYYY/MM/DD'))
                                    let isDisabled = disabledDates.includes(date.format('YYYY-MM-DD'))

                                    if (isTooSoon || isDisabled) return {
                                        disabled: true,
                                    }

                                    let className;
                                    if (isDisabled) className = "in-service";
                                    if (className) return { className };
                                }}
                                numberOfMonths={1}
                                onChange={onRangeChange}
                                highlightToday={false}
                                minDate={new DateObject().add(1, "days")}
                                plugins={[
                                    <MyPlugin vehicle={vehicle.id} position="bottom" />
                                ]}
                            />



                        </InfoContainer>

                    </FlexContainer>
                ))}
            </div>
        </Section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVehicles: (page, filters) => dispatch(fetchVehicles(page, filters)),
        fetchDisabledDates: (filters) => dispatch(fetchDisabledDates(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicle.data,
        disabledDates: state.vehicle.disabledDates,
        loading: state.vehicle.loading,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overland);