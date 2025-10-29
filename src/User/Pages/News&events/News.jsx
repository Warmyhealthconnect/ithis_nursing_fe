import React from 'react'
import './News.css'
import Titlebar from '../../Components/Titlebar/Titlebar'

// Assuming the image notice is saved locally
// import admissionNotice from './path-to-your-image.png';

function News() {
  return (
    <>
      {/* Titlebar is already handled */}
      <Titlebar title={"News & Events"}/>
      
      {/* Main content area */}
      <div className="news-page-container">
        
        {/* News Items Container */}
        <section className="news-items-container">
          
          {/* LEFT ITEM: Image/Ad Notice */}
          <div className="news-box image-notice-box">
            {/* The image is a fixed-size ad, so we use an <img> tag */}
            <img 
              src="/newspage/news.jpg" // Update with the correct path
              alt="Admission notice for BSC Nursing 2025-26 at IET College of Nursing"
              className="notice-image"
            />
          </div>
          
          {/* RIGHT ITEM: Text Announcement with Button */}
          <div className="news-box text-announcement-box">
            <p className="announcement-english">
              Applications are invited for BSc. Nursing Course <br />for the academic year 2025-26.
            </p>
            
            <p className="announcement-malayalam">
              കേരള ഹെൽത്ത് സയൻസ് യൂണിവേഴ്സിറ്റി, <br />ഇന്ത്യൻ നഴ്സിംഗ് കൗൺസിൽ, കേരള നഴ്സ് <br />ആൻഡ് മിഡ്‌വൈഫ് കൗൺസിൽ അംഗീകാരമുള്ള <br />BSc NURSING 2025-26 കോഴ്സിലേക്കുള്ള <br />അപേക്ഷകൾ ആരംഭിച്ചു
            </p>
            
            <button className="apply-now-button">Apply Now</button>
          </div>
          
        </section>
        
        {/* Add more sections for archived news or future news items here */}
        
      </div>
    </>
  )
}

export default News