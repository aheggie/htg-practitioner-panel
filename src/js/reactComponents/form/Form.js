import React, { useState } from "react";
import SectionOneIntro from "./sections/SectionOneIntro";
import SectionTwoContactInfo from "./sections/SectionTwoContactInfo";
import SectionThreeProfessionalInformation from "./sections/SectionThreeProfessionalInformation";
import SectionFourPersonalInformation from "./sections/SectionFourPersonalInformation";
import SectionFiveServices from "./sections/SectionFiveServices";
import SectionSixReviewAndSubmit from "./sections/SectionSixReviewAndSubmit";
import SectionSevenThankYouAndConfirmation from "./sections/SectionSevenThankYouAndConfirmation";

const Form = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const nextSection = () => setCurrentSection(currentSection + 1);

  const prevSection = () => setCurrentSection(currentSection - 1);

  return (
    <>
    {currentSection === 1 && (
      <SectionOneIntro 
      nextSection={nextSection} 
      />
    )}
    {currentSection === 2 && (
      <SectionTwoContactInfo 
      nextSection={nextSection} 
      prevSection={prevSection}
      />
    )}
    {currentSection === 3 && (
      <SectionThreeProfessionalInformation 
      nextSection={nextSection} 
      prevSection={prevSection}
      />
    )}
    {currentSection === 4 && (
      <SectionFourPersonalInformation 
      nextSection={nextSection} 
      prevSection={prevSection}
      />
    )}
    {currentSection === 5 && (
      <SectionFiveServices 
      nextSection={nextSection} 
      prevSection={prevSection}
      />
    )}
    {currentSection === 6 && (
      <SectionSixReviewAndSubmit 
      nextSection={nextSection} 
      prevSection={prevSection}
      />
    )}
    {currentSection === 7 && (
      <SectionSevenThankYouAndConfirmation 
      /* we will delete this later, for testing purposes we will use this to go back */
      prevSection={prevSection}
      />
    )}
    
    </>
  );
};

export default Form;
