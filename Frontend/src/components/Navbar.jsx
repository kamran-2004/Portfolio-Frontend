import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <>
      <div>
        <nav className="fixed top-0 w-full bg-blue-300 shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold  text-black">Portfolio</h1>
            <ul className="flex space-x-6">
              <li>
                
              <ScrollLink
                to="AboutMe"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline text-black"
              >
                About Me
              </ScrollLink>
                
            
              </li>
              <li>
               
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline  text-black"
              >
                Education
              </ScrollLink>
            
              </li>
              <li>
               
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline  text-black"
              >
                Projects
              </ScrollLink>
            
              </li>
              <li>
                
              <ScrollLink
                to="work-experience"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline  text-black"
              >
                Work Experience
              </ScrollLink>
            
              </li>
              <li>
                
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline  text-black"
              >
                Contact Me
              </ScrollLink>
            
              </li>
              <li>
               
                  Login
                
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <h2>Kamran</h2>
    </>
  );
}

export default Navbar;
