import React from "react";
import Heading from "../atoms/heading";
import Text from "../atoms/text";

export const TitleMolecule = () => {
  return (
    <>
      <div className="mb-[2.438rem]">
      <Heading variant="title">Giriş Yap</Heading>
      <Text variant="subTitle">
        E-posta adresi veya telefon numaranız ile giriş yapabilirsiniz.
      </Text>
      </div>
    </>
  );
};

export default TitleMolecule;
