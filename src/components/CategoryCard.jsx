const CategoryCard = ({ category, itemCount, imageUrl }) => {
  return (
    <div className="relative flex flex-wrap shadow-xl max-w-[350px] max-h-[340px] lg:w-[200px] lg:h-[200px] mb-8 hover:scale-110 cursor-pointer overflow-hidden ">
      <img
        src={imageUrl}
        alt={category}
        className="object-cover object-center overflow"
      />
      <div className="absolute w-full h-full flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-0 hover:shadow-2xl hover:scale-110 p-4 cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-2xl font-semibold text-center cursor-pointer">
            {category}
          </h3>
          <p className="text-white text-sm">{itemCount} Items</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
