import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../store/actions/productActions";
import { Spinner } from "react-awesome-spinners";
import { FETCH_STATES } from "../../store/actions/productActions";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProductLists() {
  const productList = useSelector((state) => state.products.productList);
  const fetchState = useSelector((state) => state.products.fetchState);
  const totalProductCount = useSelector(
    (state) => state.products.totalProductCount
  );
  const page = useSelector((state) => state.products.activePage);
  const [searched, setSearched] = useState("");
  const [sorted, setSorted] = useState("");
  const dispatch = useDispatch();
  const parameters = useParams();
  const navigate = useNavigate();

  const updateUrlParams = (newParams) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.keys(newParams).forEach((key) => {
      if (newParams[key]) {
        searchParams.set(key, newParams[key]);
      } else {
        searchParams.delete(key);
      }
    });

    navigate({
      pathname: window.location.pathname,
      search: searchParams.toString(),
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(searchParams.entries());
    params.category = parameters.category_id;

    dispatch(fetchProducts(params));
  }, [dispatch, window.location.search, parameters]);

  //SEARCH
  const onSearchedChange = (e) => {
    setSearched(e.target.value);
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    updateUrlParams({ filter: searched });
    const searchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(searchParams.entries());
    params.category = parameters.category_id;
    dispatch(fetchProducts(params));
  };
  //SORT
  const onSortChange = (e) => {
    setSorted(e.target.value);
  };

  const handleSort = () => {
    updateUrlParams({ sort: sorted });
    const searchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(searchParams.entries());
    params.category = parameters.category_id;
    dispatch(fetchProducts(params));
  };

  return (
    <div className="flex flex-col flex-wrap py-20 px-[10%]  font-monserrat gap-12 ">
      <div className="flex px-[2%] lg:justify-between justify-center flex-wrap items-center  text-sm md:flex-row md-no-gap gap-8 flex-col font-bold text-hdGrey ">
        <p>
          Showing all <span>{page * 25}</span> results
        </p>
        <div className="flex gap-4 items-center ">
          <p>Views</p>
          <Icon
            className="border-2 border-solid border-gray-300 hover:scale-110 cursor-pointer rounded p-2"
            icon="mingcute:grid-fill"
            color="black"
            width="35"
          />
          <Icon
            className="border-2 border-solid border-gray-300  hover:scale-110 cursor-pointer rounded p-2"
            icon="lucide:list"
            color="gray"
            width="35"
          />
        </div>
        <div className="flex justify-between items-center cursor-pointer gap-4 flex-wrap">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searched}
              onChange={onSearchedChange}
              onKeyDown={onSearchedChange}
              className=" px-2 py-3 rounded-l border border-solid border-semiGrey flex items-center cursor-text shadow-lg"
            />
            <button
              onClick={handleSearch}
              className="text-white text-md font-bold font-montserrat leading-normal t bg-prBlue px-3 py-3 bg-sky-500 rounded-r shadow-lg hover:shadow-xl hover:bg-blue-300  items-center"
            >
              Search
            </button>
          </div>
          <select
            value={sorted}
            onChange={onSortChange}
            className="text-hdGrey text-sm font-normal font-montserrat leading-normal t bg-ltGreye px-2 py-3  shadow-lg rounded border border-solid border-semiGrey flex items-center cursor-pointer"
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="rating:asc">Popularity - Low to High</option>
            <option value="rating:desc">Popularity - High to Low</option>
            <option value="price:asc">Price - Low to High</option>
            <option value="price:desc">Price - High to Low</option>
          </select>
          <button
            onClick={handleSort}
            className="text-white text-md font-bold font-montserrat leading-normal t bg-prBlue px-6 py-3 bg-sky-500 rounded hover:scale-110 shadow-lg hover:shadow-xl hover:bg-blue-300  items-center"
          >
            Sort
          </button>
        </div>
      </div>
      {searched && (
        <p className="text-sm">
          Search results for "<strong>{searched}</strong>" :
        </p>
      )}
      {fetchState === FETCH_STATES.fetching ? (
        <div className="flex justify-center items-start">
          <Spinner />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={page * 25}
          next={() =>
            dispatch(
              fetchProducts({
                filter: searched,
                sort: sorted,
                offset: 25,
              })
            )
          }
          hasMore={productList.length < totalProductCount}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>"All products have been displayed."</b>
            </p>
          }
        >
          <div className="flex flex-wrap justify-evenly gap-3 py-4   overflow-x-hidden;">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>{" "}
        </InfiniteScroll>
      )}
    </div>
  );
}
