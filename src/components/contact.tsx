import React, { useState, forwardRef } from "react";
// import tw from "twin.macro";
import { useForm } from "react-hook-form";
import { init, send } from "@emailjs/browser";
import { motion } from "framer-motion";
import { TypingText } from "../utils/framer-motion/customText";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  ContactWrap,
  EmailSent,
  SentText,
  FormWrap,
  MainForm,
  FormInput,
  ValidationMsg,
  FormTextArea,
  FormButton,
  FormDivider,
  FormItemContainer,
  InputValidationMsg,
  EmailSentIcon,
} from "./styled/contact";
import { GlobalSectionTitle } from "./styled";

const email_vars = {
  UserID: import.meta.env.VITE_USER_ID,
  TemplateID: import.meta.env.VITE_TEMPLATE_ID,
  ServiceID: import.meta.env.VITE_SERVICE_ID,
  ToName: import.meta.env.VITE_NAME,
};

init(email_vars.UserID);

interface ContactProps {
  ref?: React.Ref<HTMLDivElement | null>;
}

//todo: fix type error
// @ts-ignore
const Contact: React.FC<ContactProps> = forwardRef(
  ({}, ref: React.Ref<HTMLDivElement>) => {
    return (
      <ContactWrap ref={ref}>
        <GlobalSectionTitle>
          <TypingText title="Get in touch!" />
        </GlobalSectionTitle>
        <ContactForm />
      </ContactWrap>
    );
  }
);

interface EmailInterface {
  email: string;
  message: string;
  subject: string;
}

const ContactForm: React.FC<{}> = ({}) => {
  const [status, setStatus] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  function sendEmail(data: EmailInterface) {
    send(
      email_vars.ServiceID,
      email_vars.TemplateID,
      {
        reply_to: data.email,
        from_name: data.subject,
        message: data.message,
        to_name: email_vars.ToName,
      },
      email_vars.UserID
    ).then(
      (res) => setStatus(res.status),
      (error) => console.error("error sending email: ", error.text)
    );
  }

  return (
    <FormWrap>
      {status ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.25,
            stiffness: 125,
            bounce: 0.75,
            damping: 50,
          }}
          style={{ width: "100%" }}
        >
          <EmailSent>
            <EmailSentIcon>
              <AiOutlineCheckCircle />
            </EmailSentIcon>
            <SentText>Email Sent!</SentText>
          </EmailSent>
        </motion.div>
      ) : (
        <MainForm
          onSubmit={handleSubmit(
            (s) => sendEmail(s),
            (e) => console.error("error sending email: ", e)
          )}
        >
          <FormDivider>
            <FormItemContainer>
              {errors.email && (
                <InputValidationMsg>email is required.</InputValidationMsg>
              )}
              <FormInput
                autoComplete="off"
                {...register("email", { required: true })}
                placeholder="reply email"
              />
            </FormItemContainer>
            <FormItemContainer>
              {errors.subject && (
                <InputValidationMsg>subject is required.</InputValidationMsg>
              )}
              <FormInput
                // tw={"shadow-lg border-red-700 shadow-red-700"}
                autoComplete="off"
                {...register("subject", { required: true })}
                placeholder="subject"
              />
            </FormItemContainer>
          </FormDivider>
          <FormItemContainer>
            {errors.message && (
              <ValidationMsg>message is required.</ValidationMsg>
            )}
            <FormTextArea
              autoComplete="off"
              {...register("message", { required: true })}
              placeholder="message..."
            />
          </FormItemContainer>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ margin: "auto" }}
          >
            <FormButton type="submit">Submit</FormButton>
          </motion.div>
        </MainForm>
      )}
    </FormWrap>
  );
};

export default Contact;
