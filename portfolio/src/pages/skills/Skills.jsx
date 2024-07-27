import React from "react";
import "./skills.css";
import "./skills.css";
import Leetcode from "../../components/leetcode/Leetcode";
const Skills = () => {
  return (
    <div className="skill_page">
      <div className="my_skills">MY SKILLS</div>
      <div className="skill_cards_layout">
        <div className="skill_container">
          <div className="skill_title">Programming Languages</div>
          <div>
            <div className="skill_list">
              <p>C</p>
              <p>Java</p>
            </div>
          </div>
        </div>

        <div className="skill_container">
          <div className="skill_title">Scripting Languages</div>
          <div>
            <div className="skill_list">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
          </div>
        </div>

        <div className="skill_container">
          <div className="skill_title">Scripting Languages</div>
          <div>
            <div className="skill_list">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
          </div>
        </div>

        <div className="skill_container">
          <div className="skill_title">Technical Skill</div>
          <div>
            <div className="skill_list">
              <p>Full Stack Web Development- MERN</p>
              <p>MongoDB</p>
              <p>Express.js</p>
              <p>React</p>
              <p>Node.js</p>
            </div>
          </div>
        </div>

        <div className="skill_container">
          <div className="skill_title">Tools</div>
          <div>
            <div className="skill_list">
              <p>Canva - Documentation</p>
              <p>Figma - UI Design</p>
            </div>
          </div>
        </div>

        <div className="skill_container">
          <div className="skill_title">Soft Skills</div>
          <div>
            <div className="skill_list">
              <p>Problem-Solving</p>
              <p>Time Management</p>
            </div>
          </div>
        </div>

        <Leetcode />
      </div>
      <div className="my_skills">INTERNSHIP</div>
      <div className="internship">
        <div className="intern_container">
          <img src="Naberly.jpg" className="intern_img" />
          <div className="intern_content">
            <div className="intern_title">
              Naberly Technologies Private Limited
            </div>
            Naberly Technologies Private Limited is a vibrant Software service
            company, located in Bangalore. It is a Subsidiary of Foreign Company
            (Fathom Realty, USA), which is involved in Software production and
            publishing, consultancy, operating systems software, business &
            other application.
            <ul>
              <li>Duration : 1 month</li>
              <li>Role : React & Node.js Development</li>
              <li>
                During this internship, I worked in web project and have a great
                experience, where i learned to use the technologies and develop
                along with the team.
              </li>
            </ul>
          </div>
        </div>

        <div className="intern_container">
          <img src="salesforceLogo.png" className="intern_img2" />
          <div className="intern_content">
            <div className="intern_title">Salesforce, Inc.</div>
            Salesforce, Inc. is a famous American cloud-based software company
            that provides CRM services. Salesforce is a popular CRM tool for
            support, sales, and marketing teams worldwide. Salesforce services
            allow businesses to use cloud technology to better connect with
            partners, customers, and potential customers.
            <ul>
              <li>Duration : 1 month (Virtual)</li>
              <li>Role : Salesforce Developer</li>
              <li>
                During this internship, I focused on learning and exploring the
                Salesforce platform, gaining hands-on experience in CRM systems.
                I worked independently on tasks related to developing and
                customizing Salesforce applications, which helped me understand
                the intricacies of the platform and build my skills in this
                area.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* onhover blur the card and display "view certificate" */}
      <div className="my_skills">CERTIFICATIONS</div>
      <div className="certifications">
        <div className="certi_container">
          <img src="Courseralogo.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="udemy.jpg" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="nptel.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="accenturelogo.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="Courseralogo.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="Courseralogo.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="Courseralogo.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>

        <div className="certi_container">
          <img src="Courseralogo.png" className="certi_img" />
          <div>
            <div className="certi_name">
              <p>Introduction to cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
