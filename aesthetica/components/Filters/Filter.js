const Filter = () => {
  return (
    <div className="flex justify-start w-1/6">
      <div className="mx-24">
        <p className="font-bold text-2xl mb-6">Filters</p>
        <div className="w-[200px] h-[300px] bg-white flex justify-start">
          <div className="mx-6 mt-4 w-full">
            <p className="text-xl font-semibold">Price</p>
          </div>
        </div>
        <div className="w-[200px] h-[300px] bg-white flex justify-start mt-6">
          <div className="mx-6 mt-4 w-full">
            <p className="text-xl font-semibold">Color</p>
          </div>
        </div>
        <div className="w-[200px] h-[300px] bg-white flex justify-start mt-6">
          <div className="mx-6 mt-4 w-full">
            <p className="text-xl font-semibold">Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
