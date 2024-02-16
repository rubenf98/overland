import { Form } from 'antd';
import React, { useState } from 'react'
import { Calendar, DateObject } from "react-multi-date-picker"
import styled from "styled-components";
import dayjs from "dayjs";

const StyledCalendar = styled(Calendar)`
    width: 100%;

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

function DatePicker({ disabledDates, setDays, form }) {
    const [value, setValue] = useState(undefined);
    const [disabledRange, setDisabledRange] = useState([]);

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
            var diff = dayjs(range[1]).diff(dayjs(range[0]), 'days');

            setDays(diff)

            if (isRangeBlocked || (diff < 3)) {
                form.setFieldValue('date', undefined)
                setValue(undefined)
            } else {
                form.setFieldValue('date', range)
                setValue(range)
            }
        } else {
            setDisabledRange([]);
            setValue(range);
        }
    };

    return (
        <div>
            <Form.Item label="" name="date" rules={[{ required: true, message: 'Please input the date!' }]}>
                <StyledCalendar
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
                    numberOfMonths={2}
                    onChange={onRangeChange}
                    highlightToday={false}
                    minDate={new DateObject().add(1, "days")}
                />
            </Form.Item>
        </div>
    )
}

export default DatePicker