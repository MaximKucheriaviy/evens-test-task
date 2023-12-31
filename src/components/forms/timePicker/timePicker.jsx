import { useState, useEffect } from "react";
import { TimePickerStyled, TymePickerModal } from "./timePickerStyled";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron.svg";
import { formatTime } from "../../../service/timeFormater";

export const TimePicker = ({ setDate, initValue = new Date() }) => {
  const [active, setActive] = useState(false);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [dayTime, setDayTime] = useState("PM");
  const [strinTime, setStringTime] = useState("");
  useEffect(() => {
    setStringTime(`${formatTime(hour)} : ${formatTime(minute)}`);
  }, [hour, minute]);
  useEffect(() => {
    if (!initValue) {
      return;
    }
    let IHour = initValue.getHours();
    const IMinute = initValue.getMinutes();
    if (IHour > 12) {
      IHour -= 12;
      setDayTime("AM");
    }
    setHour(IHour.toString());
    setMinute(IMinute.toString());
  }, [initValue]);
  const onMainButtonClick = () => {
    if (active) {
      setDate((state) => {
        const newDate = new Date(state);
        newDate.setHours(dayTime === "PM" ? hour + 12 : hour);
        newDate.setMinutes(minute);
        return newDate;
      });
    }
    setActive((state) => !state);
  };

  const chageDayTime = () => {
    setDayTime((state) => {
      if (state === "AM") {
        return "PM";
      }
      return "AM";
    });
  };
  const incrementHour = () => {
    setHour((state) => {
      if (state === 12) {
        return 1;
      }
      return state + 1;
    });
  };
  const decrementHout = () => {
    setHour((state) => {
      if (state === 1) {
        return 12;
      }
      return state - 1;
    });
  };
  const incrementMinute = () => {
    setMinute((state) => {
      if (state === 59) {
        return 0;
      }
      return state + 1;
    });
  };
  const decrementMinute = () => {
    setMinute((state) => {
      if (state === 0) {
        return 59;
      }
      return state - 1;
    });
  };
  return (
    <TimePickerStyled>
      <h3 className="title">Select time</h3>
      <button
        type="button"
        className={`mainButton ${active ? "activeButton" : ""}`}
        onClick={onMainButtonClick}
      >
        {active ? "Select Time" : strinTime || "Input"}
        <Chevron className={!active ? "activeChevron" : "disabledChevron"} />
      </button>
      {active && (
        <TymePickerModal>
          <div className="topLine">
            <button
              type="button"
              className="timeNumber"
              onClick={decrementHout}
            >
              {formatTime(hour - 1 === 0 ? 12 : hour - 1)}
            </button>
            <button
              type="button"
              className="timeNumber"
              onClick={decrementMinute}
            >
              {formatTime(minute - 1 === -1 ? 59 : minute - 1)}
            </button>
          </div>
          <div className="middleLine">
            <div className="currentTime">
              <div className="timeNumber">{formatTime(hour)}</div>
              <div className="points">:</div>
              <div className="timeNumber">{formatTime(minute)}</div>
            </div>
            <div className="dayButton">{dayTime}</div>
          </div>
          <div className="bottomLine">
            <div className="timeButtons">
              <button
                type="button"
                className="timeNumber"
                onClick={incrementHour}
              >
                {formatTime(hour + 1 === 13 ? 1 : hour + 1)}
              </button>
              <button
                type="button"
                className="timeNumber"
                onClick={incrementMinute}
              >
                {formatTime(minute + 1 === 60 ? 0 : minute + 1)}
              </button>
            </div>
            <button type="button" className="dayButton" onClick={chageDayTime}>
              {dayTime === "PM" ? "AM" : "PM"}
            </button>
          </div>
        </TymePickerModal>
      )}
    </TimePickerStyled>
  );
};
