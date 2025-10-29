import React from 'react';
import Titlebar from '../../Components/Titlebar/Titlebar';
import './Department.css';

export default function Department() {
    return (
        <>
            <Titlebar title={"Department"} />

            <section className="dep-container">
                <div className="dep-heading">
                    <h1>
                        Specialized Departments for Comprehensive Nursing Development
                    </h1>
                </div>
            </section>

            <section className='nursing-foundation-section'>
                <div className='foundation-section'>
                    <h2 className='foundation-number'>01</h2>
                    <h1 className='foundation-heading'>Nursing Foundation</h1>

                    <div className="foundation-para">
                        <p>The Department of Child Health Nursing prepares future pediatric nurses through strong theoretical learning and clinical simulations, focusing on child health, disease prevention, and holistic care.</p>
                        <p>The Department of Child Health Nursing prepares future pediatric nurses through strong theoretical learning and clinical simulations, focusing on child health, disease prevention, and holistic care.</p>
                    </div>
                </div>
                <div className='img-section'>
                    <img src="/dep/depimg.jpg" className='img-fluid' alt="" />
                </div>
            </section>
        </>
    );
}
