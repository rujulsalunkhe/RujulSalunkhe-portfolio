import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold  font-poppins text-white dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2">
          {/* styles is a prop */}
          <a href={resumeLink} target="_blank">
            <Button styles="mt-10 mr-3 inline-flex items-center justify-center" text="Resume" icon={AiFillMail} />
          </a>
          <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="LinkedIn"
              icon={AiFillLinkedin}
            />
          </a>
        </div>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={profilePic}
          alt="Rujul Salunkhe"
          className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
    <p className="mt-[-20px] mb-[10px]">
       Let me know how we can work together at &nbsp;
        <a href="mailto:salunkhe.rujul@gmail.com" className="text-teal-200">
         salunkhe.rujul@gmail.com
        </a>.
</p>

    </div>
  </footer>
);

export default Footer;
