import { IoMailSharp } from "react-icons/io5";

const Button = () => {
  return (
    <div className="mx-auto flex justify-center mt-7">
      <button className="flex bg-white px-16 py-2 sm:px-24 md:px-36 rounded-lg text-lg">
        Get In Touch
        <IoMailSharp className="mt-0 ml-2 size-7" />
      </button>
    </div>
  );
};

export default Button;
