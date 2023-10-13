/* eslint-disable @typescript-eslint/no-explicit-any */
import { faAt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, TextField, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.scss";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

function MaterialContactForm() {
  const theme = useTheme();
  const contactColourModeClass = `contact contact-colour-more--${theme.palette.mode}`;
  const { t } = useTranslation("translation", {
    keyPrefix: "components.contact-form",
  });
  const [messageData, setMessageData] = useState("");
  const [isError, setIsError] = useState(false);
  const validationSchema = Yup.object({
    fullname: Yup.string().required(t("error_fullname")),
    email: Yup.string()
      .required(t("error_email_required"))
      .email(t("error_email_invalid")),
    message: Yup.mixed().required(),
  });
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitting },
  } = useForm({ resolver });

  useEffect(() => {
    console.log("isSubmitting: ", isSubmitting);
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitting, reset]);

  const onSubmit = async (data: {
    fullname: string;
    email: string;
    message: string;
  }) => {
    const subject: string = "Contact from alexbrown.xyz";
    const topicarn: string = "arn:aws:sns:eu-west-2:912415976327:contact-form";
    const action: string = "https://api.alexbrown.xyz/email/";
    const messageContent: string =
      "Full Name: " +
      data.fullname +
      "\nEmail: " +
      data.email +
      "\nMessage: " +
      data.message;
    console.log(messageContent);

    // Create an object suitable for the API Gateway
    const params: { Subject: string; TopicArn: string; Message: string } = {
      Subject: subject,
      TopicArn: topicarn,
      Message: messageContent,
    };

    const URLparams: URLSearchParams = new URLSearchParams(
      Object.entries(params)
    );
    const combinedURL: string = action + "?" + URLparams;

    return await axios
      .post(combinedURL)
      .then(function () {
        setIsError(false);
        setMessageData(`${t("post_success")}`);
      })
      .catch(function (error) {
        setIsError(true);
        if (error.responseText !== "") {
          setMessageData(error.responseText);
        } else {
          setMessageData(`${t("post_failure")}`);
        }
      });
  };

  return (
    <section className={contactColourModeClass} id="contact-form">
      <div className="contact__container">
        <Typography variant="h2" className="contact__heading">
          <FontAwesomeIcon icon={faAt} />
          {t("contact__heading")}
        </Typography>
        <p className="contact__text">{t("contact__text")}</p>
        <hr />
        <div
          id="form-messages"
          className={messageData == "" ? "" : isError ? "error" : "success"}
        >
          {messageData}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              required
              fullWidth
              id="fullname"
              label={t("fullname")}
              {...register("fullname")}
              error={errors.fullname ? true : false}
              helperText={errors.fullname?.message as string}
            />
            <TextField
              required
              fullWidth
              id="email"
              label={t("email")}
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email?.message as string}
            />
            <TextField
              required
              id="message"
              label={t("message")}
              {...register("message")}
              multiline
              minRows={4}
              defaultValue={t("message_placeholder")}
              error={errors.message ? true : false}
              helperText={errors.message?.message as string}
            />
            <LoadingButton
              type="submit"
              endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
              loading={isSubmitting}
              loadingPosition="end"
              variant="contained"
            >
              <span>{t("submit")}</span>
            </LoadingButton>
          </Stack>
        </form>
      </div>
    </section>
  );
}

const useYupValidationResolver = (validationSchema: Yup.AnyObject) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: { path: any; type: any; message: any; }) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

export default MaterialContactForm;
