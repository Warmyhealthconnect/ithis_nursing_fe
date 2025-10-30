import React from 'react';
import Titlebar from "../../Components/Titlebar/Titlebar";
import './About.css'

function About() {
    return (
        <>
            <Titlebar title={'About'} />

            <div className="about-container">
                <div className='about-heading'>
                    <h1>
                        Empowering Future Nurses with Knowledge and Compassion
                    </h1>
                </div>

                <div className='img-container2'>
                    <img src="/about/aboutusimg.png" style={{ borderRadius: "20px" }} className='img-fluid' alt="" />
                </div>

                <div className="about-para">
                    <p>
                        The let College Of Nursing Is Dedicated To Prepare Skilled And Compassionate Nursing Professionals With Strong Ethical Values And Commitment To Excellence In Healthcare.
                        The Institution Nurtures A Spirit Of Discipline, Responsibility, And Integrity, Empowering Students To Meet The Challenges Of The Ever-evolving Médical Field.
                    </p>
                </div>

                <div className="two-boxes">
                    <div className="box1">
                        <h1 className='box-heading'>Our Mission</h1>
                        <p className='box-para'>To deliver high-quality nursing education that integrates scientific knowledge, clinical expertise, and compassionate care. We aim to empower our students to become skilled, ethical, and confident healthcare professionals who make a meaningful impact in their communities.</p>
                    </div>
                    <div className="box1">
                        <h1 className='box-heading'>Our Vision</h1>
                        <p className='box-para'>To be a leading institution recognized for academic excellence, innovation, and human-centered nursing education — nurturing professionals who inspire trust, uphold integrity, and transform healthcare globally.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;