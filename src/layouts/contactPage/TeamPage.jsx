import React from "react";
import { useData } from "../../contexts/DataContext";

export default function TeamPage() {
  const { featuredPostsData, teamData } = useData();

  return (
    <div className="font-montserrat px-[10%]  py-[5%] flex flex-col items-center justify-center cursor-pointer">
      <div className="flex flex-col text-center  mb-5">
        <h1 className=" text-darkBg text-3xl  tracking-normal font-bold mb-4">
          Meet Our Team
        </h1>
        <p className=" text-hdGrey text-xs font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description1}
        </p>
        <p className=" text-hdGrey text-xs font-semibold  leading-6 tracking-tight">
          {featuredPostsData.description2}
        </p>
      </div>

      <div className="flex flex-wrap  md:justify-between justify-center py-3 pt-6  gap-8 cursor-pointer  ">
        {teamData.members.map((member, index) => (
          <div key={index} className="team-member-card">
            <img
              src={member.imageURL}
              alt={member.name}
              className="xl:w-[260px] lg:w-[220px] sm:w-[250px] w-[300px] rounded-xl mb-3 "
            />
            <h3 className="font-bold text-darkBg mb-2 ">{member.name}</h3>
            <p className="font-semibold text-hdGrey text-xs">{member.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
