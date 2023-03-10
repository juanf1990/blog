const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 pt-16 mb-10 text-white">
      <div>
        <h1 className="text-7xl">Juan's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-orange-500">
            Every Developers
          </span>{" "}
          favourite blog in the world!
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in coding | The weekly digest & more!
      </p>
    </div>
  );
};

export default Banner;
