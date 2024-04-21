import { RiToolsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className="bg-neutral-900 m-3 mt-7 rounded-md max-h-80 pb-1 sm:w-2/3 sm:mx-auto md:w-2/3 md:mx-auto lg:w-2/5 lg:mx-auto">
        <div className="flex justify-between items-center">
          <i className="p-1 bg-neutral-800 rounded-lg mt-2 ml-2">
            <RiToolsFill color="white" size={24} className="" />
          </i>
          <p className="text-white font-sans text-base font-semibold mt-2">
            What i work with
          </p>
          <FaChevronDown color="white" className="mt-2 mr-2" />
        </div>

        <div className="bg-neutral-800 m-2 rounded-md mt-6 pb-3">
          <h4 className="text-gray-400 text-xs p-2 uppercase font-semibold pt-4">
            Languages
          </h4>
          <div className="flex gap-5 px-2">
            <a
              href="https://www.typescriptlang.org/"
              rel="noreferrer"
              target="_blank"
            >
              <SiTypescript className="size-7 fill-blue-500 rounded-md hover:scale-125" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              rel="noreferrer"
              target="_blank"
            >
              <SiJavascript className="size-7 fill-yellow-400 rounded-md hover:scale-125" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/html"
              rel="noreferrer"
              target="_blank"
            >
              <FaHtml5 className="size-8 fill-orange-700 rounded-md hover:scale-125" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/css"
              rel="noreferrer"
              target="_blank"
            >
              <FaCss3Alt className="size-8 fill-blue-600 rounded-md hover:scale-125" />
            </a>
          </div>

          <h4 className="text-gray-400 text-xs p-2 uppercase font-semibold pt-4">
            Frameworks
          </h4>
          <div className="flex gap-5 px-2">
            <a href="https://react.dev/" rel="noreferrer" target="_blank">
              <FaReact className="size-7 fill-blue-500 rounded-md hover:scale-125" />
            </a>
            <a href="https://svelte.dev/" rel="noreferrer" target="_blank">
              <SiSvelte className="size-7 fill-orange-700 rounded-md hover:scale-125" />
            </a>
            <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
              <SiTailwindcss className="size-8 fill-blue-400 rounded-md hover:scale-125" />
            </a>
            <a href="https://chakra-ui.com/" rel="noreferrer" target="_blank">
              <SiChakraui className="size-8 fill-teal-500 rounded-md hover:scale-125" />
            </a>
          </div>

          <h4 className="text-gray-400 text-xs p-2 uppercase font-semibold pt-4">
            Tools & Software
          </h4>
          <div className="flex gap-5 px-2">
            <a
              href="https://code.visualstudio.com/"
              rel="noreferrer"
              target="_blank"
            >
              <BiLogoVisualStudio className="size-7 fill-blue-500 rounded-md hover:scale-125" />
            </a>
            <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
              <IoLogoFigma className="size-7 fill-white rounded-md hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
