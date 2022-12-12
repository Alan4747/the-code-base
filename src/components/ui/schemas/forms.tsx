import * as yup from "yup";

export const forms = yup
  .object({
    email: yup
      .string()
      .email("Lütfen geçerli bir E-posta adresi giriniz")
      .max(255)
      .required("E-posta giriniz"),
    phoneNumber: yup.number().test((value: any) => {
      return validatePhone(parseInt(value ?? "0"));
    }),
    password: yup.string().min(8).max(12).required(),
  })
  .required();

const validatePhone = (phone: number | undefined) => {
  return yup
    .number()
    .integer()
    .positive()
    .test((phone) => {
      return phone && phone.toString().replace(" ", "").length === 10
        ? true
        : false;
    })
    .isValidSync(phone);
};
