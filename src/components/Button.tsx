import { IoMailSharp } from "react-icons/io5";

const Button = () => {
  return (
    <div className="mx-auto flex justify-center mt-7">
      <a href="mailto:mattyoungjnr@gmail.com" rel="noreferrer" target="_blank">
        <button className="flex bg-white hover:bg-neutral-200 px-16 py-2 sm:px-24 md:px-36 rounded-lg text-lg">
          Get In Touch
          <IoMailSharp className="mt-0 ml-2 size-7" />
        </button>
      </a>
    </div>
  );
};

export default Button;
