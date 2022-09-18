import styles from "./Popup.module.less";
import cn from "classnames";
import { useState, useEffect } from "react";
import { Close, Arrows } from "components/Icons";
import { CircularProgress } from "@material-ui/core";

const Popup = ({ onClose, openSuccess }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [referer, setReferer] = useState("");
  const [page, setPage] = useState("");

  const phoneRegex = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$";
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { emailOrPhone } = Object.fromEntries(formData);
    const isValidEmail = !!emailOrPhone.match(emailRegex);
    const isValidPhone = !!emailOrPhone.match(phoneRegex);
    let newField = null;
    if (isValidEmail) {
      newField = "email";
    }
    if (isValidPhone) {
      newField = "msisdn";
    }
    if (newField) {
      formData.set(newField, emailOrPhone);
      formData.delete("emailOrPhone");
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          emailOrPhone: "Invalid Email or Phone number",
        };
      });
      return;
    }
    setLoading(true);
    formData.delete("agree");
    let headers = new Headers();
    fetch("/api/v1/contact/request", {
      method: "POST",
      headers: headers,
      body: formData,
      credentials: "include",
    })
      .catch((error) => console.error(error))
      .then((res) => {
        setLoading(false);
        e.target.reset();
        if (!res.ok) {
          return setErrors((prev) => {
            return {
              ...prev,
              server: "Something went wrong. Try again later.",
            };
          });
        }
        openSuccess();
        onClose();
      });
  };

  const getValidityMessage = (validity, name) => {
    if (validity.valueMissing) {
      if (name === "acception") {
        return "To continue accept Privacy policy";
      }
      return `Please enter ${name}`;
    } else if (validity.tooShort) {
      return `${name} is too short`;
    } else if (validity.tooLong) {
      return `${name} is too long`;
    }
    return `${name} must be valid`;
  };

  const onError = ({ target }) => {
    if (!Object.keys(errors).includes(target.name)) {
      const message = getValidityMessage(target.validity, target.placeholder);
      setErrors((prev) => {
        return { ...prev, [target.name]: message };
      });
    }
  };

  const clearErrors = () => Object.keys(errors).length && setErrors({});

  useEffect(() => {
    const referer = localStorage.getItem("referer");
    if (referer) setReferer(referer);
    if (window.location.href) setPage(window.location.href);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <button className={styles.content__btn} onClick={onClose}>
          <Close className={styles.content__btn__icon} />
        </button>
        <div className={cn(styles.container, styles.container_light)}>
          <Arrows className={styles.container_light__icon} />
          <h2
            className={cn(
              styles.container_light__title,
              styles.container_light__title_first
            )}
          >
            Thank you for discovering Binerals on Clutch.co!
          </h2>
          <div className={styles.container_light__line}></div>
          <h2
            className={cn(
              styles.container_light__title,
              styles.container_light__title_second
            )}
          >
            Leave your contact details, and we will get back to you shortly.
          </h2>
        </div>
        <div className={cn(styles.container, styles.container_dark)}>
          <form
            className={styles.container_dark__form}
            onChange={clearErrors}
            onInvalid={onError}
            onSubmit={handleSubmit}
          >
            <div className={styles.container_dark__form__content}>
              <input type="hidden" value={referer} name="referer" />
              <input type="hidden" value={page} name="page" />
              <input type="hidden" value="landingPopup" name="cta" />
              <label className={styles.container_dark__form__content__label}>
                <input
                  autoFocus
                  required
                  type="text"
                  className={cn(
                    styles.container_dark__form__content__label__input,
                    { [styles.error_border]: errors.name }
                  )}
                  placeholder="Your Name"
                  name="name"
                  maxLength={22}
                  minLength={3}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </label>
              <label className={styles.container_dark__form__content__label}>
                <input
                  type="text"
                  maxLength={40}
                  required
                  className={cn(
                    styles.container_dark__form__content__label__input,
                    { [styles.error_border]: errors.msisdn || errors.email }
                  )}
                  placeholder="Email or Phone number"
                  name="emailOrPhone"
                />
                {errors.emailOrPhone && (
                  <p className={styles.error}>{errors.emailOrPhone}</p>
                )}
              </label>
              <label className={styles.container_dark__form__content__label}>
                <textarea
                  className={
                    styles.container_dark__form__content__label__textarea
                  }
                  maxLength={500}
                  placeholder="Add details of your request"
                  name="message"
                />
                {errors.message && (
                  <p className={styles.error}>{errors.message}</p>
                )}
              </label>
              <div className={styles.container_dark__form__content__checkwrap}>
                <input
                  required
                  value={true}
                  type="checkbox"
                  placeholder="acception"
                  className={
                    styles.container_dark__form__content__checkwrap__check
                  }
                  id="agree"
                  name="agree"
                />
                <label
                  htmlFor="agree"
                  className={
                    styles.container_dark__form__content__checkwrap__label
                  }
                >
                  I agree to the Privacy policy *
                </label>
              </div>
              {errors.agree && <p className={styles.error}>{errors.agree}</p>}
              {errors.server && <p className={styles.error}>{errors.server}</p>}
              <div className={styles.container_dark__form__content__btnwrap}>
                <button
                  disabled={loading}
                  type="submit"
                  className={styles.container_dark__form__content__btnwrap__btn}
                >
                  {!loading ? (
                    "Get in Touch!"
                  ) : (
                    <CircularProgress colorprimary="#fff" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
