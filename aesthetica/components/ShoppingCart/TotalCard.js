const TotalCard = () => {
  return (
    <div className="w-[300px] h-[300px] border-4 border-bckgrnd-dark my-6">
      <div className="flex justify-center border-b-2 border-bckgrnd-dark">
        <p className="my-4 font-medium text-xl">Order summary</p>
      </div>
      <div className="flex flex-col justify-start m-6 border-b-2 border-bckgrnd-dark">
        <p className="text-lg">Total price: </p>
        <p className="text-lg my-4">Total delivery: €20</p>
      </div>
      <div className="flex justify-center">
        <p className="my-4 text-2xl font-semibold">TOTAL: </p>
      </div>
    </div>
  );
};

export default TotalCard;
