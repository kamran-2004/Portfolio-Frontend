import React from "react";

function ProjectOutline({info}) {
  return (
    <>
      <div className="card bg-slate-600 w-96 shadow-xl hover:scale-105 duration-300">
        <div className="card-body">
          <h2 className="card-title text-white">{info.title}</h2>
          <p>

            <h3 className="font-semibold">Features</h3>
            <p>{info.feature1}</p>
            <br />
            <p>{info.feature2}</p>

            </p>
          <div className="card-actions justify-between mt-3">
            <a href="#" className="btn btn-primary">Website</a>
            <a href="#" className="btn btn-primary">Github</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOutline;
