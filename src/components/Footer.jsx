import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <FaRegCopyright />2023 Jiri Vicha
      </div>
      
      <div className="media">
        <p><FaGithub /></p>
        <p><CiLinkedin /></p>
        
      </div>
      
    </div>
  )
}

export default Footer