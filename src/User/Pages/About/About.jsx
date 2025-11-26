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

                <div className="about-highlight">
                    <span className="about-badge">More About us</span>

                    <p>
                        The journey of trust, commitment, and sincere service started right from day one at Ithis. We believe in shaping skilled, compassionate, and confident healthcare professionals by nurturing them with knowledge, hands-on experience, and guidance. Every lecture, every lab, and every patient interaction is a part of this shared journey—one committed to touching lives, spreading hope, and making a difference in the world of healthcare.
                    </p>

                    <p>
                        It is much more than a college; it is a trusted home wherein learning meets empathy, dreams are transformed into purpose, and every student is empowered to lead with care, courage, and integrity. With modern facilities, advanced labs, experienced faculty, and real-world hospital exposure, we offer an environment that inspires growth, fosters innovation, and builds the true spirit of nursing. The journey at Ithis is to create professionals who excel not only in skill but also carry the heart to heal, comfort, and uplift every life they touch.
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