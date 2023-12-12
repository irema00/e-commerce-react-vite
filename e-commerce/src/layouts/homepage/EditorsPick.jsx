import React from "react";
import { useData } from "../../contexts/DataContext";

function EditorsPick() {
  const { editorsPick } = useData();

  return (
    <div className="flex md:flex-wrap flex-col items-stretch justify-center font-montserrat  w-full  py-16 px-[10%] border-4 border-solid border-red-600">
      <div className="text-center font-montserrat mb-12 border-4 border-solid border-purple-600 ">
        <h2 className="font-bold text-2xl tracking-normal mb-2">
          {editorsPick.title}
        </h2>
        <p className="font-normal text-md text-gray-600">
          {editorsPick.description}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center  font-montserrat sm:flex-wrap md:flex-wrap border-4 border-solid border-pink-200 gap-7 ">
        <div className="relative border-4 border-solid border-orange-600">
          <img
            src={editorsPick.categories[0].imageUrl}
            alt="Men"
            className="object-cover"
          />
          <button className="absolute bottom-0 mb-4 ml-6 px-16 py-3 font-bold tracking-normal bg-white text-black ">
            {editorsPick.categories[0].buttonText}
          </button>
        </div>

        <div className="relative border-4 border-solid border-green-600">
          <img
            src={editorsPick.categories[1].imageUrl}
            alt="Women"
            className="object-cover"
          />
          <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black">
            {editorsPick.categories[1].buttonText}
          </button>
        </div>

        <div className="flex flex-col gap-4 border-4 border-solid border-lime-600">
          <div>
            <div className="relative  ">
              <img
                src={editorsPick.categories[2].imageUrl}
                alt="Accessories"
                className="object-cover"
              />
              <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black">
                {editorsPick.categories[2].buttonText}
              </button>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                src={editorsPick.categories[3].imageUrl}
                alt="Kids"
                className="object-cover"
              />
              <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black">
                {editorsPick.categories[3].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;