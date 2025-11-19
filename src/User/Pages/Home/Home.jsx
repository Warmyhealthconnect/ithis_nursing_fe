import React, { useEffect, useRef } from 'react'
import "./Home.css"

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        console.log("Autoplay prevented, user interaction required");
      });
    }
  }, []);
  return (
    <>
      <section className='banner'>
        <video ref={videoRef} loop muted playsInline className="banner-video">
          <source src="/videos/ithis.webm" type="video/webm" />
        </video>
        <div className="banner-text">
          <p>Where Knowledge Meets Kindness and Science Becomes Service to Humanity.</p>
        </div>
      </section>

      <section className='broadcast-section'>
        <div className="broadcast-wrapper">
          <div className="broadcast-text">
            <span>Latest News: Innovation never stops at iThis — stay tuned for more updates! </span>
          </div>
        </div>
      </section>

      <section className="home_section_1">
        <div className="home_section_1_container">
          <h2>About Us</h2>
          <p>IET College of Nursing prepares skilled, compassionate nurses with strong ethics and a commitment to excellence in healthcare, nurturing discipline,
            integrity, and responsibility for the evolving medical world.</p>
        </div>
      </section>

      <section className="home_section_2">
        <div className="row d-flex justify-content-center align-items-center mx-0 px-md-5">
          <div className="col-md-5 col mb-4">
            <div className="home_section_2_img_container">
              <img src="/HomeImages/image 2.png" className="img-fluid" alt="" />
            </div>
            <p>
              With modern facilities and expert faculty, the college offers comprehensive nursing programs that foster academic excellence and professional competence.
            </p>
            <button className="btn btn-primary">Know More</button>
          </div>

          <div className="col-md-4 col d-flex flex-column justify-content-end">
            <div className="home_section_2_img_container2">
              <img src="/HomeImages/image 3.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="home_section_3">
        <div className="home_section_3_container">
          <h2>Course</h2>
          <p>The Nursing program prepares skilled, compassionate, and ethical professionals through a blend of classroom learning and clinical training to deliver quality patient care</p>
        </div>
      </section>

      <section className='home_section_4 container-fluid'>
        <div className='home_section_4_container row'>
          <div className="col-5 px-0">
            <img src="/HomeImages/nurse-preparing-their-shift 1.png" className='img-fluid' alt="" />
          </div>
          <div className="col home_section_4_container_col2">
            <div className='home_section_4_text_cont d-flex flex-column justify-content-around'>
              <h2>Where Knowledge Meets Kindness and Science Becomes Service to Humanity</h2>
              <p>B.Sc Nursing is a four-year program that combines theoretical knowledge and practical training
                to develop skilled, compassionate nurses ready to work in hospitals, clinics, and community health settings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='home_section_5'>
        <div className='row px-md-5 home_section_5_container container-fluid' >
          <div className="col px-4">
            <p>It is with immense pride and joy that I welcome you to IET College of Nursing, Malappuram a center of excellence committed to shaping the
              future guardians of health and healing. Nursing is not just a career; it is a calling of compassion and courage, where knowledge meets kindness
              and care becomes a sacred duty. At IET, we inspire our students to grow into and dignity. skilled, confident, and value-oriented professionals
              who can serve humanity with dedication
            </p>
            <p>
              Our institution blends academic brilliance with moral strength, modern facilities with person- heal, and transform lives. al mentorship, and
              scientific learning with a spiritual touch - preparing nurses who can lead, Join us at IET College of Nursing, where learning inspires service
              and every heartbeat echoes with care.
            </p>
          </div>
          <div className="col-md-5 ">
            <div className="row d-flex flex-column home_section_5_cnt2">
              <div className="col p-0 home_section_5_img_container">
                <img src="/HomeImages/principal 1.png" className='img-fluid' alt="" />
              </div>
              <div className="col home_section_5_imgtxt_container">
                <h3>Dr. Vilasini C</h3>
                <h6>Principal PHD(Nursing)<br />IET College of Nursing Malappuram</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_section_3">
        <div className="home_section_3_container">
          <h2>Facilities</h2>
          <p>Empowering Education Through <br /> Advanced Infrastructure and Technology</p>
        </div>
      </section>

      <section className="home_section_6">
        <div className="row">
          <div className='col-sm-3 p-2 home_section_6_img_cnt1'>
            <div className="" >
              <img src="/HomeImages/clean-empty-library-hall 1.png" className='home_section_6_img' alt="" />
            </div>
          </div>
          <div className='col-sm-3 p-2 home_section_6_img_cnt2'>
            <div className="px-0 home_section_6_card_text " >
              <h3>Library</h3>
              <p>The Nursing Foundations Department at Ithis Medicity builds a strong base in nursing skills through advanced labs and hands-on training</p>
            </div>
          </div>
          <div className='col-sm-3 p-2 home_section_6_img_cnt3'>
            <div className="px-0 " >
              <img src="/HomeImages/image 6.png" className='home_section_6_img' alt="" />
            </div>
          </div>
          <div className='col-sm-3 p-2 home_section_6_img_cnt4'>
            <div className="px-0 home_section_6_card_text" >
              <h3>Computer Facilities</h3>
              <p>A computer lab has been set up for providing knowledge to the stu-dents.
                Computer facilities give the students ample opportunities for learning the system and practice. Internet facilities is also provided</p>
            </div>
          </div>
          <div className='col-sm-3 p-2 home_section_6_img_cnt5'>
            <div className="px-0 home_section_6_card_text " >
              <h3>Classrooms</h3>
              <p>Classrooms are spacious, air-conditioned, and well-equipped with smart boards, projectors,
                and audio-visual aids to create an effective and engaging learning environment.</p>
            </div>
          </div>
          <div className='col-sm-3 p-2 home_section_6_img_cnt6'>
            <div className="px-0 " >
              <img src="/HomeImages/view-modern-classroom-school 1.png" className='home_section_6_img' alt="" />
            </div>
          </div>
          <div className='col-sm-3 p-2 home_section_6_img_cnt7'>
            <div className="px-0 home_section_6_card_text " >
              <h3>Nursing Foundation Lab</h3>
              <p>The Nursing Foundations Department at Ithis Medicity builds a strong base in nursing skills through advanced labs and hands-on training.</p>
            </div>
          </div>
          <div className='col-sm-3 home_section_6_img_cnt8'>
            <div className="px-0 home_section_6_viewmore">
              <a href="/facilities">View More<i class="fa-solid fa-sm fa-arrow-down"></i></a>
            </div>
          </div>
        </div>
      </section >

    </>
  )
}

export default Home