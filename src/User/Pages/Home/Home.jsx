import React, { useEffect, useRef } from 'react'

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
    </>
  )
}

export default Home