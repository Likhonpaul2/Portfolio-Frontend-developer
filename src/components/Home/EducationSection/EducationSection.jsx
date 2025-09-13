import React from "react";
import SectionHeading from "../../../UI/SectionHeading";

const EducationSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 text-secondary" id="about">
      <SectionHeading
        title="Education"
        textAlign="center"
        
      />

      {/* <div className="grid lg:grid-cols-2 gap-10 items-center bg-base-100 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden"> */}
        {/* Left: Image */}
        {/* <div className="w-full lg:h-full md:h-[540px] sm:h-[400px] h-[320px]">
          <img
            src="/Github-Profile2.png"
            alt="Portrait of emon paul"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div> */}

        {/* Right: About Text */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            B.sc in {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
              Computer Science and Engineering
            </span>
          </h3>
          <p className="text-base leading-relaxed mb-6 opacity-80">
            National University - (2021-2025)
          </p>
          
        </div>
      {/* </div> */}
    </section>
  );
};

export default EducationSection;
