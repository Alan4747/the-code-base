import React from "react";
import TitleMolecule from "../molecules/title-molecule";
import TabsOrganisms from "../organisms/Tabs-organisms";

export const Welcome = () => {
  return (
    <div className="flex justify-between h-full">
      <section className="bg-[#1E1E1E] lg:px-8 flex-1 h-full p-[0.75rem] container mx-auto">
        <div className="mt-16 pt-16 lg:pt-10 flex flex-col lg:items-center">
          <TitleMolecule />
          <TabsOrganisms />
        </div>
      </section>
      <section className="bg-black hidden lg:block lg:w-[34.125rem] xl:w-[40rem] h-screen auth-fluid top-0 right-0">
        <div className="flex justify-center items-center mt-8">
          <img
            width={250}
            height={250}
            src="https://framerusercontent.com/images/0tCxLUivOfJznbX65gGoilemjYQ.png"
            alt="logo"
          />
        </div>
      </section>
    </div>
  );
};

export default React.memo(Welcome);
