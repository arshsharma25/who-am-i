import React, {useState} from "react";
import {FaGraduationCap} from "react-icons/fa";
import {FiBriefcase} from "react-icons/fi";
import {BsCalendar2Check} from "react-icons/bs";
import "./Timeline.css";

const Qualification = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <section className="qualification section">
            <h5>My personal journey</h5>
            <h2 className="section__title">Milestones</h2>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${
                            isActive ? "qualification__active" : " "
                        }`}
                        onClick={handleToggle}
                    >
                        <FaGraduationCap className="qualification__icon"/>
                        <span className="tab__font"> Education</span>
                    </div>

                    <div
                        className={`qualification__button button--flex ${
                            isActive ? " " : "qualification__active"
                        }`}
                        onClick={handleToggle}
                    >
                        <FiBriefcase className="qualification__icon"/>
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
                                    Computer and Information Systems: Emerging Technologies
                                </h3>
                                <span className="qualification__subtitle">
                  Douglas College
                </span>

                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon"/> &nbsp;
                                    2021-2022
                                </div>
                                <br/>
                                <p>
                                    <ul>
                                        <li>Private tutor by Varsity Tutors for programming courses in Java, Python,
                                            Linux, C, C++, SQL, MS Access
                                        </li>
                                        <li>Guided 100+ students in computer languages, data structures and algorithms
                                        </li>
                                        <li>Peer Tutor at the Learning Centre and Student Teaching Assistant</li>
                                    </ul>
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
                                    Electronics & Communication Engineering
                                </h3>
                                <span className="qualification__subtitle">
                  Guru Nanak Dev University
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon"/> &nbsp;
                                    2013-2017
                                </div>
                                <br/>
                                <p>
                                    <ul>
                                        <li>Specialization in Digital Communication</li>
                                        <li>Headed departmental organization named Electronics Student Forum as Convener
                                            with more than 50 members
                                        </li>
                                        <li>Organised and handled Blood Connect NGO Amritsar City activities as City
                                            President
                                        </li>
                                    </ul>
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
                                <h3 className="qualification__title">DevOps Engineer</h3>
                                <span className="qualification__subtitle">
                  Capgemini
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon"/>
                                    &nbsp; July 2020 - Dec 2021
                                </div>
                                <br/>
                                <p>
                                    <ul>
                                        <li>Designed dashboards in Kibana & AppDynamics which helped reduced the BAU
                                            activity by 30% and MTTR by 84%.
                                        </li>
                                        <li>Implemented automated reports using Kibana advanced watcher saving 2 hours
                                            of BAU each day
                                        </li>
                                        <li>Developed bash scripts for detailed incident analysis reporting improving
                                            BRR by 40%
                                        </li>
                                        <li>Proposed & implemented automation solutions to clients using Python leading
                                            to 15% reduction in delivery time
                                        </li>
                                        <li>Built and deployed Ansible Playbooks for change validations reducing the
                                            deployment time by 20%
                                        </li>
                                    </ul>
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
                                {/*<span className="qualification__line"></span>*/}
                            </div>
                            <div className="qualification__card">
                                <h3 className="qualification__title">Production Support Specialist</h3>
                                <span className="qualification__subtitle">
                  Capgemini
                </span>
                                <div className="qualification__calendar">
                                    <BsCalendar2Check className="calendar__icon"/> &nbsp;
                                    2021-2022
                                </div>
                                <br/>
                                <p>
                                    <ul>
                                        <li>Provided 24x7 support to clients for their critical applications</li>
                                        <li>Performed root cause analysis and provided solutions to clients</li>
                                        <li>Maintained 99.5% availability SLA for all the Apple, Samsung and Google
                                            E-Wallets
                                        </li>
                                        <li>Drove reduction & implementation time for change by 30% by streamlining SOPs
                                            and standardizing methodologies
                                        </li>
                                        <li>Monitored application health in real time using AppDynamics, Kibana, Splunk
                                            and Java application logs
                                        </li>
                                        <li>Effectively communicated with the client to understand business requirements
                                            and address customer needs
                                        </li>
                                        <li>Created and executed SQL, bash and python scripts for client reports,
                                            incident analysis and application changes.
                                        </li>
                                        <li>Spearheaded knowledge sharing sessions on applications, monitoring tools and
                                            Linux
                                        </li>
                                        <li>Collaborated with various team for implementing successful changes and
                                            resolve outages
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
