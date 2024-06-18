import img from "/src/assets/salomon.jpg";

const Avatar = () => {
  return (
    <div className="container mx-auto mt-10 flex justify-center text-white">
      <img
        className="border-4 border-gray-600 size-40 object-cover rounded-full"
        src={img}
        alt="A picture of Matthew Young"
      />
    </div>
  );
};

export default Avatar;
