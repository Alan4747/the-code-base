import React from "react";

export interface Props {
  error?: string | undefined;
}

const Error = ({ error }: Props) => {
  return (
    <>
      error ? (
      <div className="flex items-start mt-3 mb-2">
        <span className="text-[0.813rem] font-medium">{error}</span>
      </div>
      ) : (<></>
      );
    </>
  );
};

export default React.memo(Error);
