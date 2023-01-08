const Steps = () => {
  return (
    <div className="w-3/5 flex flex-row items-center justify-center px-32 py-14">
      <div className="stepper-item w-12 h-12 text-center pt-2 font-medium border-2 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-12 h-12 text-center pt-2 font-medium border-2 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-12 h-12 text-center pt-2 font-medium border-2 rounded-full">
        3
      </div>
    </div>
  );
}

export default Steps;
