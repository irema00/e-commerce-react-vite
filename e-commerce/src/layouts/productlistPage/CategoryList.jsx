import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { useData } from "../../contexts/DataContext";

const CategoryList = () => {
  const { categoryData } = useData();

  return (
    <div className="flex justify-center items-center gap-5 bg-ltGrey">
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
