import React, { useEffect, useState } from "react";
import ProjectOutline from "./ProjectOutline";
import axios from 'axios'

function Projects() {

  const [title,setTitle] = useState() ;
  const [feature1, setFeature1] = useState()
  const [feature2, setFeature2] = useState()

  const Submit = (e) => {
    e.preventDefault() ;
    axios.post("http://localhost:3001/ProjectInfo", {title,feature1,feature2})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  const [info,setInfo] = useState([{title:"abcd", feature1 : "abcd", feature2 : "abcd"}]) ;

  useEffect(() =>{
    axios.get('http://localhost:3001')
    .then(result=> setInfo(result.data))
    .catch(err =>  console.log(err))
  } ,[])
  

  return (
    <>
      <div>
        <h1 className="py-5 font-bold text-4xl flex justify-center items-center ">
          Projects
        </h1>
        <hr />
        <div className="">
          <div
            id="projects"
            className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-3 bg-slate-100"
          >
            {
              info.map((info) => {
                return <div>
                  <ProjectOutline id = {info._id} info={info} />
                </div>
              })
            }
          </div>

          <div className="flex items-center justify-center bg-slate-100">
            <button
              className="btn bg-blue-400 text-black mb-2 hover:bg-blue-800"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Add More Projects
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Enter Your Project Details
                </h3>
                <form onSubmit={Submit}>
                  <p className="py-4 space-y-4">
                    <h2>Project Title</h2>
                    <input
                      type="text"
                      placeholder="Enter Your Project Title"
                      className="mt-2 rounded-md w-4/5 h-10 p-3"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="mt-2">
                      <h3>Features</h3>
                      <input
                        type="text"
                        placeholder="feature 1"
                        className="mt-2 rounded-md w-4/5 h-10 p-3"
                        onChange={(e) => setFeature1(e.target.value)}
                      />
                      <br />
                      <br />
                      <input
                        type="text"
                        placeholder="feature 2"
                        className="mt-2 rounded-md w-4/5 h-10 p-3"
                        onChange={(e) => setFeature2(e.target.value)}
                      />
                    </div>
                  </p>

                  <button className="btn bg-blue-500 text-black">Submit</button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
