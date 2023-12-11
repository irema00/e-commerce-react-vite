import React from "react";
import accessories from "../assets/editorsPick/accessories.jpg";
import kids from "../assets/editorsPick/kids.jpg";
import women from "../assets/editorsPick/women.jpg";
import men from "../assets/editorsPick/men.jpg";
function EditorsPick() {
  return (
    <div className="flex flex-wrap flex-col items-stretch justify-center font-montserrat  w-full py-16">
      <div className="text-center font-montserrat mb-12 ">
        <h2 className="font-bold text-2xl tracking-normal mb-2">
          EDITOR'S PICK
        </h2>
        <p className="font-normal text-md text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-wrap font-montserrat items-center justify-center ">
        <div className="flex flex-row gap-7">
          <div>
            <div className="relative">
              <img src={men} alt="Men" className="object-cover" />
              <button className="absolute bottom-0 mb-4 ml-6 px-16 py-3 font-bold tracking-normal bg-white text-black">
                MEN
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-7">
            <div>
              <div className="relative">
                <img src={women} alt="Women" className="object-cover" />
                <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black">
                  WOMEN
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="relative">
                  <img
                    src={accessories}
                    alt="Accessories"
                    className="object-cover"
                  />
                  <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black">
                    ACCESSORIES
                  </button>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img src={kids} alt="Kids" className="object-cover" />
                  <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black">
                    KIDS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
