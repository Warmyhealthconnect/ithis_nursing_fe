import React from 'react';
import Titlebar from '../../Components/Titlebar/Titlebar';
import './Affiliation.css';

// Data array defined above (or imported)
const affiliationData = [
  {
    id: 1,
    logoSrc: "affilogos/knmc-logo.png", // Update path
    title: "Kerala Nurses and Midwives Council (KNMC)",
    description:
      "Kerala Nurses and Midwives Council is an autonomous body under the Government of Kerala, Health and Family Welfare Department was constituted by Government of Kerala under the provisions of Nurses and Midwives Act 1953",
    logoAlt: "KNMC Logo",
    isPlaceholder: false,
  },
  {
    id: 2,
    logoSrc: "affilogos/inc-logo.png", // Update path
    title: "Indian Nursing Council (INC)",
    description:
      "Indian Nursing Council is a national regulatory body for nurses and nurse education in India. It is an autonomous body under the Government of India, Ministry of Health & Family Welfare, constituted by the Central Government under section 3(1) of the Indian Nursing Council Act, 1947 of Indian parliament",
    logoAlt: "INC Logo",
    isPlaceholder: false,
  },
  {
    id: 3,
    logoSrc: "affilogos/kuhs-logo.png", 
    title: "Kerala University of Health Sciences (KUHS",
    description: "Kerala University of Health Sciences is a medical university in the city of Thrissur in Kerala, India. The university is located in 75 acres on the Government Medical College, Thrissur campus @ Thrissur District in Kerala",
    logoAlt: "",
    isPlaceholder: false,
  },
];

function Affiliation() {
    return (
        <>
            <Titlebar title={"Affiliations and Accreditations"} />

            <div className="affi-container">
                {affiliationData.map((affi) => (
                    // Always use a unique 'key' when mapping elements in React
                    <div 
                        className={`affi-boxes ${affi.isPlaceholder ? 'placeholder-box' : ''}`} 
                        key={affi.id}
                    >
                        {/* Only render logo and content if it's not a placeholder */}
                        {!affi.isPlaceholder && (
                            <>
                                <img 
                                    src={affi.logoSrc} 
                                    alt={affi.logoAlt} 
                                    className="affi-logo" 
                                />
                                <h2 className="affi-heading">{affi.title}</h2>
                                <p className="affi-text">{affi.description}</p>
                                <button className="affi-button">View More</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Affiliation;