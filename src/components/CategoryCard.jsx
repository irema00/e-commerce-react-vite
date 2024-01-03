const CategoryCard = ({ category, gender, imageUrl }) => {
  return (
    <div className="relative flex flex-wrap justify-between shadow-xl max-w-[350px] max-h-[350px] md:max-h-[350px]  lg:w-[220px]  lg:h-[230px]  mb-8 lg:hover:scale-110 cursor-pointer overflow-hidden ">
      <img
        src={imageUrl}
        alt={category}
        className="object-cover object-center"
      />
      <div className="absolute w-full h-full flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-0 hover:shadow-2xl hover:scale-110 p-4 cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-2xl font-semibold text-center cursor-pointer">
            {category}
          </h3>
          <p className="text-white text-sm">{gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
