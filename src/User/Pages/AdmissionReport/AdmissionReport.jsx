import React from "react";
import "./AdmissionReport.css";

const AdmissionReport = () => {
  return (
    <div className="admission-report">
      <section className="admission-hero">
        <div className="hero-overlay">
          <div className="hero-actions">
            <button className="ghost-btn">Download Prospectus</button>
            <button className="solid-btn">Apply Now</button>
          </div>
          <h1 className="hero-title">Admission</h1>
        </div>
      </section>

      <section className="admission-progress">
        <div className="progress-line">
          <span className="progress-dot" aria-hidden="true" />
          <span className="progress-dot" aria-hidden="true" />
          <span className="progress-dot" aria-hidden="true" />
        </div>
      </section>

      <section className="admission-success">
        <h2>Your application has been successfully submitted</h2>
        <p>
          Thank you for choosing IET Nursing College - we will review your details and get in touch soon.
        </p>

        <div className="cta-buttons">
          <button className="secondary-btn">Print out Application</button>
          <button className="secondary-btn">Payment Details</button>
        </div>
      </section>

      <section className="brand-band">
        <div className="brand-text">ithismedicity</div>
      </section>
    </div>
  );
};

export default AdmissionReport;
