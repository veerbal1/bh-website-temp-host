import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@mui/material";
// import styles from "../../../styles/ContactForm.module.scss";
import styles from "../../../../styles/ContactForm.module.scss";

function ButtonWrapper({ children }) {
  const { submitForm } = useFormikContext();

  const handleClick = () => {
    submitForm();
  };
  const buttonConfig = {
    className: styles.submitBtn,
    variant: "contained",
    size: "small",
    color: "primary",
    onClick: handleClick,
  };

  return <Button {...buttonConfig}>{children}</Button>;
}

export default ButtonWrapper;
