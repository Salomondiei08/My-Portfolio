import { RiToolsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <>
      <div className="bg-neutral-900 m-3 mt-7 rounded-md max-h-80">
        <div className="flex gap-x-11">
          <i className="p-1 bg-neutral-800 rounded-lg ml-2 mt-2">
            <RiToolsFill className="fill-white size-6" />
          </i>
          <h3 className="text-white mt-3 font-sans text-base font-semibold">
            What i work with
          </h3>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          dolorum ex illum magnam inventore quaerat tenetur nisi necessitatibus
          iste delectus, ut non veniam illo aut eaque! Error et quo, eum dolor
          vel rerum fugiat quas aspernatur! Obcaecati vero magni perferendis
          pariatur labore, quo alias sed dolorum itaque, expedita illo sapiente!
        </div>
      </div>
    </>
  );
};

export default Skills;
