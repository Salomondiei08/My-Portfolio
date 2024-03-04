const Avatar = () => {
  return (
    <>
      <div className="container mx-auto mt-10 flex justify-center text-white">
        <img
          className=" size-24 object-cover rounded-lg"
          src="/public/myphoto.jpg"
          alt="A picture of Matthew Young"
        />
      </div>
    </>
  );
};

export default Avatar;
