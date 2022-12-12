import React, { useState } from "react";
import useIcons from "../../icons/use-icons";
import Alert from "../atoms/alert";

export interface AlertMoleculeProps {
  message?: string | undefined;
  status?: "error" | "success";
}
export const AlertMolecule = ({ message, status }: AlertMoleculeProps) => {
  const { CloseAlertIcon } = useIcons();
  const [closeAlert, setCloseAlert] = useState<boolean>(false);
  return (
    <>
      {!closeAlert ? (
        <div
          className={
            status === "success"
              ? "flex gap-[0.3rem] border rounded-[12px] h-[3rem] p-[0.719rem] border-[#239B56] bg-[#D5F5E3] text-[#28B463]"
              : "flex gap-[0.3rem] border rounded-[12px] h-[3rem] p-[0.719rem] border-[#F2323F] bg-[#361F21] text-[#FF5050]"
          }
        >
          <CloseAlertIcon
            color={status === "success" ? "#28B463" : "#FF5050"}
            width={15}
            height={15}
            onClick={() => setCloseAlert(true)}
          />{" "}
          <Alert message={message} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(AlertMolecule);
