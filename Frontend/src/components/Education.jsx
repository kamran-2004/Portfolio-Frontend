import React from "react";

function Education() {
  return (
    <>
    <h1 className="py-5 font-bold text-4xl flex justify-center items-center ">Education</h1>
      <section
        id="education"
        className="h-96 bg-gray-100 flex items-center justify-center"
      >
        
        <div className="flex justify-between space-x-20">
        <div className="card bg-primary text-primary-content w-96 hover:scale-105 duration-300">
          <div className="card-body">
            <h2 className="card-title">Secondary</h2>
            <p>Chanchal Siddheswari Institution</p>
            <div className="card-actions justify-start">
              <h3>Percentage - 87%</h3>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content w-96 hover:scale-105 duration-300">
          <div className="card-body">
            <h2 className="card-title">Senior Secondary</h2>
            <p>Chanchal Siddheswari Institution</p>
            <div className="card-actions justify-start">
              <h3>Percentage - 87%</h3>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content w-1/3 hover:scale-105 duration-300">
          <div className="card-body">
            <h2 className="card-title">Graduation</h2>
            <p>Indian Institute of Technology</p>
            <div className="card-actions justify-start">
              <h3>CGPA - 7.1</h3>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Education;
