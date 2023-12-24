import { AxiosInstance } from "../../api/api";

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const fetchCategories = () => {
  return (dispatch) => {
    AxiosInstance.get("/categories")
      .then((response) => {
        const topCategories = response.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);
        dispatch(setCategories(topCategories));
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };
};
