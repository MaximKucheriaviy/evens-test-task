import { DataPikerStyled, DataPikerModal } from "./DataPikerStyled";
import { useState } from "react";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron.svg";
import { Calendar } from "./Calendar";
import { useEffect } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DataPiker = ({ setDateProp, initValue = null }) => {
  const [active, setActive] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [currentDate] = useState(new Date(Date.now()));
  const [stringDate, setStringDate] = useState("");
  const onMainButtonClick = () => {
    setActive((state) => !state);
  };

  useEffect(() => {
    if (!initValue) {
      return;
    }
    setDate(initValue);
  }, [initValue]);

  useEffect(() => {
    setStringDate(
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    );
  }, [date]);
  const onRightClick = () => {
    setDate((state) => {
      const newState = new Date(state);
      newState.setMonth(state.getMonth() + 1);
      return newState;
    });
  };
  const acceptData = () => {
    setActive(false);
    setDateProp(date);
  };
  const onLeftClick = () => {
    setDate((state) => {
      const newState = new Date(state);
      newState.setMonth(state.getMonth() - 1);
      return newState;
    });
  };
  return (
    <DataPikerStyled>
      <h3 className="title">Select date</h3>
      <button
        type="button"
        className={`mainButton ${active ? "activeButton" : ""}`}
        onClick={onMainButtonClick}
      >
        {active ? "Select Date" : stringDate || "Input"}
        <Chevron className={!active ? "activeChevron" : "disabledChevron"} />
      </button>
      {active && (
        <DataPikerModal className="datapiker">
          <div className="monthSelector">
            <button type="button" onClick={onLeftClick}>
              <Chevron className="left" />
            </button>
            <p>
              <span className="month">{monthNames[date.getMonth()]}</span>
              <span className="year">{date.getFullYear()}</span>
            </p>
            <button type="button" onClick={onRightClick}>
              <Chevron className="right" />
            </button>
          </div>
          <div className="weekName">
            <div className="red">Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div className="red">Sat</div>
          </div>
          <Calendar date={date} currentDate={currentDate} setDate={setDate} />
          <div className="buttonDiv">
            <button
              className="canselButton"
              onClick={() => {
                setActive(false);
              }}
              type="button"
            >
              Cansel
            </button>
            <button className="chooseButton" type="button" onClick={acceptData}>
              Choose date
            </button>
          </div>
        </DataPikerModal>
      )}
    </DataPikerStyled>
  );
};
