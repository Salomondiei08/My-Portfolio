interface NameProps {
  fname: string;
  lname: string;
}

const Name = ({ fname, lname }: NameProps) => {
  return (
    <>
      <div className="container mx-auto w-full flex justify-center mt-6 text-center">
        <h2 className="text-white text-3xl font-sans font-normal">
          {fname + " " + lname}
          <h2 className="text-gray-400 sm:text-2xl font-sans font-normal">
            {"@TheReinventGuy"}
          </h2>
        </h2>
      </div>
    </>
  );
};

export default Name;
