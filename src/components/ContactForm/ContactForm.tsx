import { useState, useEffect } from "react";
import "./ContactForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();
  const [messageData, setMessageData] = useState("");
  const [isError, setIsError] = useState(false);
  const theme = useTheme();
  const colourModeClasses = `contact contact-colour-mode--${theme.palette.mode}`;
  const { t } = useTranslation("translation", { keyPrefix: "components.contact-form" });

  const emailValidation: RegExp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const onSubmit = (data: FieldValues) => {
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

    axios
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

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (    
    <section className={colourModeClasses} id="contact-form">
      <div className="contact__container">
        <h2 className="contact__heading">
          <FontAwesomeIcon icon={faAt} />
          {t("contact__heading")}
        </h2>
        <p className="contact__text">{t("contact__text")}</p>
        <hr />
        <div
          id="form-messages"
          className={messageData == "" ? "" : isError ? "error" : "success"}
        >
          {messageData}
        </div>
        <form
          className="pure-form pure-form-aligned"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="fullname">{t("fullname")}</label>
              <input
                id="fullname"
                type="text"
                placeholder={t("fullname")}
                {...register("fullname", { required: true })}
                required
              />
              {errors.fullname && (
                <p className="pure-form-message-inline">
                  {t("error_fullname")}
                </p>
              )}
              <span className="pure-form-message-inline">*</span>
            </div>

            <div className="pure-control-group">
              <label htmlFor="email">{t("email")}</label>
              <input
                id="email"
                type="email"
                placeholder={t("email")}
                {...register("email", {
                  required: true,
                  pattern: emailValidation,
                })}
                required
              />
              {errors.email && (
                <p className="pure-form-message-inline">{t("error_email")}</p>
              )}
              <span className="pure-form-message-inline">*</span>
            </div>

            <div className="pure-control-group">
              <label htmlFor="message">{t("message")}</label>
              <textarea
                id="message"
                rows={3}
                placeholder={t("message_placeholder")}
                {...register("message", { required: true })}
                required
              ></textarea>
              {errors.message && (
                <p className="pure-form-message-inline">
                  {t("error_message")}
                </p>
              )}
              <span className="pure-form-message-inline">*</span>
            </div>

            <div className="pure-controls">
              <button
                type="submit"
                className="pure-button pure-button-primary"
              >
                {t("submit")}
              </button>
              <span className="pure-form-message-inline">
                * {t("required_fields")}
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    </section>    
  );
}

export default ContactForm;
