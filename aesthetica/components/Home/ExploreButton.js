const ExploreButton = ({ title, isClicked }) => {
  return (
    <div className="my-5 mr-5">
      {isClicked && (
        <button className="flex justify-center bg-black text-white text-m font-medium py-2 px-8 border-2 border-black rounded-full shadow-xl">
          <p>{title}</p>
        </button>
      )}
      {!isClicked && (
        <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-m font-medium py-2 px-8 border-2 border-black rounded-full shadow-xl">
          <p>{title}</p>
        </button>
      )}
    </div>
  );
};

export default ExploreButton;
