import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <>
      <div className="flex gap-5 mt-7 w-full justify-center">
        <a
          href="https://github.com/matthewyoungjr"
          target="_blank"
          rel="noreferrer"
          className="bg-neutral-900 p-2 rounded-lg hover:bg-neutral-800"
        >
          <IoLogoGithub className="fill-white size-8 " />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-young-82a099213"
          target="_blank"
          rel="noreferrer"
          className="bg-neutral-900 p-2 rounded-lg hover:bg-neutral-800"
        >
          <FaLinkedin className="fill-blue-500 size-8" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="bg-neutral-900 p-2 rounded-lg hover:bg-neutral-800"
        >
          <FaXTwitter className="fill-white size-8" />
        </a>
      </div>
    </>
  );
};

export default Socials;
