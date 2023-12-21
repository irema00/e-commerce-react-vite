import React from "react";
import { useData } from "../../contexts/DataContext";

function EditorsPick() {
  const { editorsPick } = useData();

  return (
    <div className="flex md:flex-wrap flex-col items-stretch justify-center font-montserrat  w-full  py-[5%]   bg-ltGrey ">
      <div className="text-center font-montserrat mb-12  py-3 ">
        <h2 className="font-bold text-xl tracking-normal mb-2 ">
          {editorsPick.title}
        </h2>
        <p className=" md:text-md font-bold text-xs sm:px-0 px-[20%] tracking-wide text-gray-500">
          {editorsPick.description}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center  font-montserrat flex-wrap  gap-7 ">
        <div className="relative md:w-[510px] md:h-[500px] md:max-w-[510px] max-w-[300px] h-[500px]">
          <img
            src={editorsPick.categories[0].imageUrl}
            alt="Men"
            className="object-cover w-full h-full object-center"
          />
          <button className="absolute bottom-0 mb-4 ml-6 px-16 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
            {editorsPick.categories[0].buttonText}
          </button>
        </div>

        <div className="relative md:h-[500px] md:max-w-[510px] max-w-[300px] h-[500px]  ">
          <img
            src={editorsPick.categories[1].imageUrl}
            alt="Women"
            className="object-cover w-full h-full object-center"
          />
          <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black shadow-xl   hover:opacity-75">
            {editorsPick.categories[1].buttonText}
          </button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row xl:flex-col">
          <div>
            <div className="relative md:max-w-[240px] max-w-[300px] h-[240px] ">
              <img
                src={editorsPick.categories[2].imageUrl}
                alt="Accessories"
                className="object-cover w-full h-full object-center"
              />
              <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black shadow-xl hover:opacity-75">
                {editorsPick.categories[2].buttonText}
              </button>
            </div>
          </div>
          <div>
            <div className="relative  md:max-w-[240px] w-[300px] h-[240px]  ">
              <img
                src={editorsPick.categories[3].imageUrl}
                alt="Kids"
                className="object-cover w-full h-full object-center"
              />
              <button className="absolute bottom-0 mb-4 ml-4 px-8 py-3 font-bold text-sm bg-white text-black shadow-xl hover:opacity-75">
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
