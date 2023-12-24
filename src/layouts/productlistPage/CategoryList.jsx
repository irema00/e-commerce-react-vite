import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const categories = useSelector((state) => state.global.categories);
  return (
    <div className="flex lg:justify-between justify-center flex-wrap items-center gap-5 bg-ltGrey px-[10%]">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category.title}
          imageUrl={category.img}
        />
      ))}
    </div>
  );
};

export default CategoryList;
