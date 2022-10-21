import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/react-datepicker.css";
import * as _ from "lodash";
import { getMonth, getYear } from "date-fns";

const ReactDatePicker = ({ setStart, setEnd }: any) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => {
                    setStart(date);
                    setStartDate(date);
                }}
                startDate={startDate}
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                }) => {
                    const years = _.range(2022, getYear(new Date()) + 5, 1);
                    const months = [
                        "01",
                        "02",
                        "03",
                        "04",
                        "05",
                        "06",
                        "07",
                        "08",
                        "09",
                        "10",
                        "11",
                        "12",
                    ];

                    return (
                        <div className="custom-react-datepicker__select-wrapper">
                            <button onClick={decreaseMonth}>◀️</button>

                            <div className="custom-react-datepicker__select-item">
                                {/* 연도 선택 select box */}
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(Number(value))}
                                >
                                    {years.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <span>년</span>
                            </div>
                            <div className="custom-react-datepicker__select-item">
                                {/* 월 선택 select box */}
                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                        changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <span>월</span>
                            </div>

                            <button onClick={increaseMonth}>▶️</button>
                            {/* <button onClick={increaseMonth}>월 +</button> */}
                        </div>
                    );
                }}
            />
            <div style={{ margin: "0px 20px", display: "flex", alignItems: "center" }}>~</div>

            <DatePicker
                selected={endDate}
                onChange={(date: Date) => {
                    setEnd(date);
                    setEndDate(date);
                }}
                startDate={endDate}
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                }) => {
                    const years = _.range(2022, getYear(new Date()) + 5, 1);
                    const months = [
                        "01",
                        "02",
                        "03",
                        "04",
                        "05",
                        "06",
                        "07",
                        "08",
                        "09",
                        "10",
                        "11",
                        "12",
                    ];

                    return (
                        <div className="custom-react-datepicker__select-wrapper">
                            <button onClick={decreaseMonth}>◀️</button>

                            <div className="custom-react-datepicker__select-item">
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(Number(value))}
                                >
                                    {years.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <span>년</span>
                            </div>
                            <div className="custom-react-datepicker__select-item">
                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                        changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <span>월</span>
                            </div>

                            <button onClick={increaseMonth}>▶️</button>
                        </div>
                    );
                }}
            />
        </>
    );
};

export default ReactDatePicker;
