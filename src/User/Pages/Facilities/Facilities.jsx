import React from 'react'
import Titlebar from '../../Components/Titlebar/Titlebar';
import './Facilities.css'

function Facilities() {
    return (
        <>
            <Titlebar title={"Facilities"} />

            <section className="fac-dep-container">
                <div className="fac-dep-heading">
                    <h1>
                        Empowering Education Through Advanced Infrastructure and Technology
                    </h1>
                </div>
            </section>

            <section className='fac-foundation-section'>
                <div className='fac-foundation-content'>
                    <h2 className='fac-foundation-number'>01</h2>
                    <h1 className='fac-foundation-heading'>Library</h1>

                    <div className="fac-foundation-para">
                        <p>The library is a vital resource center that supports the academic and research needs of students and faculty.</p>
                        <p>The library offers a quiet and conducive environment for reading and study, with specious seating capacity, cataloguing systems, and computer access for online research. It is well-equipped with a wide range of recent editions textbooks, reference materials, journals, periodicals, and digital resources related to various subjects.</p>
                    </div>
                </div>
                <div className='fac-img-section'>
                    <img src="/lib/library.jpg" className='fac-img-fluid' alt="" />
                </div>
            </section>
        </>
    )
}

export default Facilities
