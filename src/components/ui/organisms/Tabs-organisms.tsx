import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import useIcons from "../../icons/use-icons";
import EpostForm from "./epost-form";
import PhoneForm from "./phone-form";

function TabsOrganisms() {
  const { PhoneIcon, EpostIcon } = useIcons();
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-[12px] bg-[#212121] p-1 mb-[1.5rem] lg:w-[22.375rem]">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-[8px] text-sm font-medium leading-5 text-white",
                selected
                  ? "tab text-[#BABDC2] text-[0.75rem] flex justify-center items-center gap-1 h-[2.375rem]"
                  : "flex justify-center items-center gap-1 text-[#BABDC2] text-[0.75rem] "
              )
            }
          >
            <PhoneIcon width={12} height={12} /> Telefon numarası
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-[8px] text-sm font-medium leading-5 text-white",
                selected
                  ? "tab text-[#BABDC2] text-[0.75rem] flex justify-center items-center gap-1 h-[2.375rem]"
                  : "flex justify-center items-center gap-1 text-[#BABDC2] text-[0.75rem]"
              )
            }
          >
            <EpostIcon width={12} height={12} /> E-posta adresi
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <PhoneForm />
          </Tab.Panel>
          <Tab.Panel>
            <EpostForm />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default React.memo(TabsOrganisms);
