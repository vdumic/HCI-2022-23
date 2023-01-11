const InfoCard = ({ Icon, title, details }) => {
  return (
    <div class="flex-col w-72 p-6 bg-[#d5ccc3] shadow-md">
      <Icon className="h-10 w-10" />
      <div className="flex-col">
        <div class="mt-4 text-2xl font-semibold tracking-tight text-black">
          {title}
        </div>
        <p class="mt-3 font-normal text-black">{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
