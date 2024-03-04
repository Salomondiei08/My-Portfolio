import { IoMailSharp } from "react-icons/io5";

const Button = () => {
  return (
    <div className="mx-auto flex justify-center mt-7">
      <button className="flex bg-white px-20 py-2 rounded-md">
        <IoMailSharp />
        Get in touch
      </button>
    </div>
  );
};

export default Button;
