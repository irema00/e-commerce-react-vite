import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  addAddress,
  setAddressInfo,
} from "../../store/actions/shoppingCartActions";
import { useDispatch, useSelector } from "react-redux";
useSelector;

export default function AddAdressModal({ onClose }) {
  const dispatch = useDispatch();
  const [setIsLoading] = useState(false);
  const address = useSelector((state) => state.shoppingCart);
  console.log(address);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mode: "onChange",
      title: "",
      firstname: "",
      lastname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
  });

  const onSubmit = async (data) => {
    const addressFormData = {
      title: data.title,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      city: selectedProvinceName,
      district: selectedDistrictName,
      neighborhood: data.neighborhood,
      address: data.address,
    };
    setIsLoading(true);
    await dispatch(addAddress(addressFormData));
    setIsLoading(false);
    onClose();
  };

  useEffect(() => {
    fetch("https://turkiyeapi.dev/api/v1/provinces")
      .then((response) => response.json())
      .then((data) => setProvinces(data.data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://turkiyeapi.dev/api/v1/districts`)
        .then((response) => response.json())
        .then((data) => {
          const selectedProvinceDistricts = data.data.filter(
            (district) => district.province === selectedProvinceName
          );
          setDistricts(selectedProvinceDistricts);
          console.log("DISTRICTLER", selectedProvinceDistricts);
          console.log("SEÇİLEN ŞEHİR DOĞRU MU", selectedProvinceName);
        })
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [selectedProvince, selectedProvinceName]);

  const handleProvinceChange = (event) => {
    const selectedProvinceId = event.target.value;
    const selectedProvinceObj = provinces.find(
      (province) => province.id.toString() === selectedProvinceId
    );

    setSelectedProvince(selectedProvinceId);
    setSelectedProvinceName(selectedProvinceObj?.name);
    console.log("Selected City:", selectedProvinceName);
    setDistricts([]);
  };
  const handleDistrictChange = (event) => {
    const selectedDistrictId = event.target.value;
    const selectedDistrictObj = districts.find(
      (district) => district.id.toString() === selectedDistrictId
    );

    setSelectedDistrictName(selectedDistrictObj?.name);
  };
  useEffect(() => {
    console.log("Selected District:", selectedDistrictName);
  }, [selectedDistrictName]);
  return (
    <div className="flex inset-0 bg-black bg-opacity-50 justify-center items-center z-50 ">
      <div className="bg-white p-4 rounded max-w-lg w-full ">
        <Icon
          onClick={onClose}
          className="flex float-right"
          icon="icon-park:close"
        />
        <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
          <h2 className="md:text-lg text-md font-bold mb-2 ">
            Add New Address
          </h2>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-bold text-hdGrey"
            >
              Address Title:
            </label>
            <input
              id="title"
              {...register("title", {
                required: "Address Title is required",
              })}
              name="title"
              type="text"
              placeholder="Enter an address title (e.g., Home, Work)"
              required
              className="w-full px-2 py-1 border border-solid border-semiGrey rounded text-sm md:text-lg"
            />{" "}
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className="flex gap-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-hdGrey"
              >
                Name:
              </label>
              <input
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                name="name"
                type="text"
                placeholder="name"
                required
                className="w-full px-2 py-1 border  border-solid border-semiGrey rounded text-sm md:text-lg"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-bold text-hdGrey"
              >
                Surname:
              </label>
              <input
                id="surname"
                {...register("surname", {
                  required: "Surname is required",
                  minLength: {
                    value: 2,
                    message: "Surname must be at least 2 characters",
                  },
                })}
                name="surname"
                type="text"
                placeholder="Surname"
                required
                className="w-full px-2 py-1 border  border-solid border-semiGrey rounded text-sm md:text-lg"
              />{" "}
              {errors.surname && <p>{errors.surname.message}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-hdGrey"
            >
              Phone:
            </label>
            <input
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                  message: "Invalid phone number",
                },
              })}
              name="phone"
              type="text"
              placeholder="+905*********"
              required
              className="w-full px-2 py-1 border  border-solid border-semiGrey rounded text-sm md:text-lg"
            />{" "}
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-bold text-hdGrey"
            >
              City:
            </label>
            <select
              id="city"
              {...register("city", { required: "City is required" })}
              name="city"
              required
              className="w-1/2 px-2 py-1.5 border border-solid border-semiGrey rounded text-sm md:text-lg"
              onChange={handleProvinceChange}
              value={selectedProvince}
            >
              <option value="">Select a province</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div>
            <label
              htmlFor="district"
              className="block text-sm font-bold text-hdGrey"
            >
              District:
            </label>
            <select
              id="district"
              {...register("district", { required: "District is required" })}
              name="district"
              required
              className="w-1/2 px-2 py-1.5 border border-solid border-semiGrey rounded text-sm md:text-lg"
              onChange={handleDistrictChange}
            >
              <option value="">Select a district</option>
              {districts &&
                districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="neighborhood"
              className="block text-sm font-bold text-hdGrey"
            >
              Neighborhood:
            </label>
            <input
              id="neighborhood"
              {...register("neighborhood", {
                required: "Neighborhood is required",
              })}
              name="neighborhood"
              type="text"
              placeholder="Enter your neighborhood"
              required
              className="w-full px-2 py-1 border border-solid border-semiGrey rounded text-sm md:text-lg"
            />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-bold text-hdGrey"
            >
              Address:
            </label>
            <textarea
              id="address"
              {...register("address", { required: "Address is required" })}
              name="address"
              placeholder="Enter your address (Street, Building, Door Number)"
              required
              rows="3"
              className="w-full px-2 py-1 border border-solid border-semiGrey rounded text-sm md:text-lg"
            ></textarea>
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-lg"
            >
              Save Address
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml- text-sm md:text-lg2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
