import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../api/api";
import { setAddressInfo } from "../../store/actions/shoppingCartActions";
import { useSelector } from "react-redux";
useSelector;

export default function AddAdressModal({ onClose }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const address = useSelector((state) => state.shoppingCart);
  console.log(address);
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
    console.log("adres submit çalıştı");

    const addressFormData = {
      title: data.title,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      city: data.city,
      district: data.district,
      neighborhood: data.neighborhood,
      address: data.address,
    };
    setIsLoading(true);
    try {
      const response = await AxiosInstance.post(
        "/user/address",
        addressFormData
      );
      console.log("New address added successfully", response.data);
      toast.success("Address added successfully!");
    } catch (error) {
      console.error("Address adding failed!", error);

      toast.error("Error adding address!");
    } finally {
      setIsLoading(false);

      onClose();
    }
  };

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
                  required: "name is required",
                  minLength: {
                    value: 3,
                    message: "name must be at least 3 characters",
                  },
                })}
                name="Name"
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
                  required: "Lurname is required",
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
            >
              <option value="" disabled selected>
                Select a city
              </option>
              <option value="izmir">Izmir</option>
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
            >
              <option value="" disabled selected>
                Select a district
              </option>
              <option value="izmir">Izmir</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="neighborhood"
              className="block text-sm font-bold text-hdGrey"
            >
              Neighborhood:
            </label>
            <select
              id="neighborhood"
              {...register("neighborhood", {
                required: "neighborhood is required",
              })}
              name="neighborhood"
              required
              className="w-full px-2 py-1.5 border border-solid border-semiGrey rounded text-sm md:text-lg"
            >
              <option value="" disabled selected>
                Select a neighborhood
              </option>
              <option value="izmir">Izmir</option>
            </select>
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
