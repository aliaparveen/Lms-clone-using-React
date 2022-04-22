import React, { useRef } from "react";
import CardSlider from "./CardSlider";
import Progress from "./Progress";
import Stats from "./Stats";


const Cardbody = () => {

  const dashboard = useRef(null);
  const assignment = useRef(null);
  const recording = useRef(null);
  const course = useRef(null);


  const Dashboard = () => {
    dashboard.current.classList.remove("d-none");
    console.log(dashboard);
    assignment.current.classList.add("d-none");
    recording.current.classList.add("d-none");
    course.current.classList.add("d-none");
  };
  const Recordings = () => {
    dashboard.current.classList.add("d-none");
    console.log(dashboard);
    assignment.current.classList.add("d-none");
    recording.current.classList.remove("d-none");
    course.current.classList.add("d-none");
  };
  const Assignment = () => {
    dashboard.current.classList.add("d-none");
    console.log(dashboard);
    assignment.current.classList.remove("d-none");
    recording.current.classList.add("d-none");
    course.current.classList.add("d-none");
  };
  const Course = () => {
    dashboard.current.classList.add("d-none");
    console.log(dashboard);
    assignment.current.classList.add("d-none");
    recording.current.classList.add("d-none");
    course.current.classList.remove("d-none");
  };
  return (
    <div>
      <section className="container align-items-center justify-content-center CardContainer">
        
        <div className="card container ">
          <div className="menueItem w-100 d-flex justify-content-around ">
            <div className="Trait " onClick={Dashboard}>
              Dashboard
            </div>
            <div className="Trait" onClick={Recordings}>
              Recordings
            </div>
            <div className="Trait" onClick={Assignment}>
              Assignments
            </div>
            <div className="Trait" onClick={Course}>
              CourseSyllabus
            </div>
          </div>
          <div className="live-lect">
            <h4 className="mx-4 my-3">Your Live Lectures</h4>
            
          </div>
          
        </div>
        <div className="container d-none" ref={recording}>
          <CardSlider/>
        </div>
        <div className="container d-none" ref={assignment}>
          salman
        </div>
        <div className="container d-none" ref={course}>
          <CardSlider/>
        </div>
        <CardSlider dashboard={dashboard} />
        <Progress value={50} max={100} />
      <Stats value={0} max={16}/>
      </section>
     
    </div>
  );
};

export default Cardbody;
