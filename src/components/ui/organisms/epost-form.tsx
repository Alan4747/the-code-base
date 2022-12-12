import { yupResolver } from "@hookform/resolvers/yup";
import { size } from "lodash";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../store/hooks";
import { getCurrentUser } from "../../../store/slices/appSlice";
import useIcons from "../../icons/use-icons";
import Button from "../atoms/button";
import Divide from "../atoms/divide";
import Input from "../atoms/input";
import Text from "../atoms/text";
import AlertMolecule from "../molecules/alert-molecule";
import { forms } from "../schemas/forms";

export const EpostForm = () => {
  const { AppleIcon, GoogleIcon, FacebookIcon } = useIcons();
  const { currentUser }: any = useAppSelector(getCurrentUser);
  const [status, setStatus] = useState<boolean>();

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(forms),
  });
  const setField = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true });
  };

  const loginWithEposta = () => {
    if (
      currentUser?.email !== watch("email") &&
      currentUser?.passwordEmail !== watch("password")
    ) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(loginWithEposta)}>
      <div className="flex flex-col gap-6">
        <Input
          label="E-posta adresi"
          type="email"
          placeholder=""
          wrapperClass="w-full"
          value={watch("email")}
          onChange={(e) => setField("email", e.target.value)}
        />
        <Input
          type="password"
          label="Şifre"
          wrapperClass="w-full"
          value={watch("password")}
          onChange={(e) => setField("password", e.target.value)}
        />
        {status && (
          <AlertMolecule
            status="error"
            message="Telefon numaranız ve ya şifreniz yanlış. Şifrenizi yenilemeyi deneyebilirsiniz."
          />
        )}

        <div className="flex justify-end">
          <Text
            variant="subTitle"
            className=" font-normal text-[0.75rem] leading-[0.938]"
          >
            <span className="text-[#7E8085]">Şifremi unuttum?</span>
          </Text>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:mt-10 mt-[6rem]">
        <Button variant="login" type="submit">
          <span className="not-italic font-medium text-sm leading-6">
            Giriş Yap
          </span>
        </Button>
        <Divide />
        <div className="flex justify-between items-center lg:gap-2">
          <Button variant="social" className="bg-none">
            <FacebookIcon />
          </Button>
          <Button variant="social" className="bg-none">
            <GoogleIcon />
          </Button>
          <Button variant="social" className="bg-none">
            <AppleIcon />
          </Button>
        </div>
        <div>
          <Text className="flex justify-center items-center gap-2">
            <p>Üye değil misin?</p>
            <strong className="text-[#374fc7] font-bold">Kayt Ol</strong>
          </Text>
        </div>
      </div>
    </form>
  );
};

export default React.memo(EpostForm);
