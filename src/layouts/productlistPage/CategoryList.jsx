import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "slugify";

const CategoryList = () => {
  const categories = useSelector((state) => state.global.categories);
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="flex lg:justify-between justify-center flex-wrap items-center gap-2 bg-ltGrey px-[10%]">
      {topCategories.map((category) => (
        <Link
          to={`/shop/${category.id}/${
            category.gender === "e" ? "erkek" : "kadin"
          }/${slugify(category.title, {
            lower: true,
          })}`}
        >
          <CategoryCard
            key={category.id}
            category={category.title}
            imageUrl={category.img}
            gender={category.gender === "e" ? "erkek" : "kadın"}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
