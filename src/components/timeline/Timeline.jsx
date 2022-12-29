import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { BsCalendar2Check } from "react-icons/bs";
import "./Timeline.css";

const Qualification = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <section className="qualification section">
            <h5>My personal journey</h5>
            <h2 className="section__title">Qualification</h2>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${
                            isActive ? "qualification__active" : " "
                        }`}
                        onClick={handleToggle}
                    >
                        <FaGraduationCap className="qualification__icon" />
                        <span className="tab__font"> Education</span>
                    </div>

                    <div
                        className={`qualification__button button--flex ${
                            isActive ? " " : "qualification__active"
                        }`}
                        onClick={handleToggle}
                    >
                        <FiBriefcase className="qualification__icon" />
                        <span className="tab__font"> Work</span>
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* educational background */}
                    <div
                        className={`qualification__content ${
                            isActive ? " qualification__active" : " qualification__inactive"
                        }`}
                        id="education"
                    >
                        {/* first education experience */}
                        <div className="qualification__data">
                            <div className="qualification__card">
                                <h3 className="qualification__title">
                                    Computer and Information Systems: Data Analytics
                                </h3>
                                <span className="qualification__subtitle">
                  Douglas College
                </span>

                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon" /> &nbsp;
                                    2021-2022
                                </div>
                                <br />
                                <p>
                                    &#9900; 4.05 GPA
                                    <br />
                                    &#9900; International Returning Student Scholarship x 2<br />
                                    &#9900; Dean's list x 3<br />
                                </p>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* second education experience */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div className="qualification__card">
                                <h3 className="qualification__title">
                                    Instrumentation & Control engineering
                                </h3>
                                <span className="qualification__subtitle">
                  Gujarat Tech. University
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon" /> &nbsp;
                                    2016-2020
                                </div>
                                <br />
                                <p>
                                    &#9900; 9.03/10 GPA
                                    <br />
                                    &#9900; Top 1% of Students based on overall Rank
                                    <br />
                                    &#9900; Member of Youth On the Move
                                    <br />
                                    &#9900; Merit Based Scholarship
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`qualification__content ${
                            isActive ? " qualification__inactive" : " qualification__active"
                        }`}
                        id="work"
                    >
                        {/* first work experience */}
                        <div className="qualification__data">
                            <div className="qualification__card">
                                <h3 className="qualification__title">Computer Science Tutor</h3>
                                <span className="qualification__subtitle">
                  Douglas College
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon" />
                                    &nbsp; 2021-2022
                                </div>
                                <br />
                                <p>
                                    &#9900; Trained and Mentored 250+ Students.
                                    <br />
                                    &#9900; One of the most booked tutor for Computer Science
                                    Courses.
                                    <br />
                                    &#9900; Supported students to build core foundation in Java,
                                    C#, JavaScript, and SQL.
                                    <br />
                                    &#9900; College Reading & Learning Association 2 certified
                                    advanced tutor.
                                    <br />
                                </p>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* second work experience */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="qualification__card">
                                <h3 className="qualification__title">Computer Lab Assistant</h3>
                                <span className="qualification__subtitle">
                  Douglas College
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon" /> &nbsp;
                                    2021-2022
                                </div>
                                <br />
                                <p>
                                    &#9900; Assisted 6 instructors in the span of 5 semesters to
                                    facilitate Lab sessions.
                                    <br />
                                    &#9900; Hosted Drop-in Open Labs to help students with their
                                    coursework.
                                    <br />
                                    &#9900; Mentored students to develop study skills, understand
                                    course material, and meet their learning goals.
                                    <br />
                                </p>
                            </div>
                        </div>

                        {/* third qualification */}
                        <div className="qualification__data">
                            <div className="qualification__card">
                                <h3 className="qualification__title">Automation Specialist</h3>
                                <span className="qualification__subtitle">
                  Advaitya Dye Chem, India
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon" /> &nbsp;
                                    2019-2020
                                </div>
                                <br />
                                <p>
                                    &#9900; Developed comprehensive PLC and SCADA programs for
                                    distributed control systems.
                                    <br />
                                    &#9900; Performed continuous improvements to meet the changing
                                    production requirements.
                                    <br />
                                    &#9900; Worked on PLC, SCADA, HMI, and Control Panels.
                                    <br />
                                </p>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
