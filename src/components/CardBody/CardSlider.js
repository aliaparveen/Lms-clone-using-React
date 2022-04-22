import React, { useRef } from "react";
import dummyarrr from "../../DummyData";
import "../CardBody/CardSlider.css";
import { BsCalendar2EventFill } from "react-icons/bs";

const CardSlider = ({ dashboard }) => {
  return (
    <div className="container main-card-container">
      <div className="container cardContainer" ref={dashboard}>
        {dummyarrr.map((item) => {
          return (
            <div className="maindiv mx-2">
              <div className="innerdiv my-1">
                <div className="d-flex calender my-2">
                  <span className="px-2">
                    <BsCalendar2EventFill />
                  </span>
                  <div className="px-1">{item.month}</div>
                  <div className="px-1">{`${item.day}th, `}</div>
                  <div className="px-1">{item.year}</div>
                  <div>09:45 PM</div>
                  <div className="px-1">Asia/karachi</div>
                </div>
                <div className="w-75 mx-3 ">
                  <h4>{item.title}</h4>
                </div>
                <div className="w-75 mx-3 inst">
                  <h6>Instructor:</h6>
                </div>
                <div className="w-75 mx-3 inst">
                  <h3>{item.instructor}</h3>
                </div>
                <div className="w-75 mx-3 cert">
                  <h6>{item.certified}</h6>
                </div>
                <div className="w-75 mx-3 mb-3 current">
                  <h5>{item.current}</h5>
                </div>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSlider;
