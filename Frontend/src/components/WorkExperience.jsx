
import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Head of Helpline Department",
      company: "BloodConnect Foundation",
      duration: "January 2024 - Present",
      description:
        "Managed helpline operations, coordinated with donors and hospitals, and streamlined communication protocols to improve efficiency.",
    },
    {
      role: "Volunteer",
      company: "BloodConnect Foundation",
      duration: "March 2023 - December 2023",
      description:
        "Assisted in organizing blood donation camps, donor engagement, and data management to support foundation initiatives.",
    },
    // Add more experiences as needed
  ];

  return (
    <section id="work-experience" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {experience.role}
              </h3>
              <p className="text-gray-600">
                <span className="font-medium">{experience.company}</span> • {experience.duration}
              </p>
              <p className="text-gray-700 mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
