import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { useData } from "../../contexts/DataContext";

const CategoryList = () => {
  const { categoryData } = useData();

  return (
    <div className="flex lg:justify-between justify-center flex-wrap items-center gap-5 bg-ltGrey px-[10%]">
      {categoryData.map((category) => (
        <CategoryCard
          key={category.id}
          category={category.categoryName}
          itemCount={category.itemCount}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default CategoryList;
