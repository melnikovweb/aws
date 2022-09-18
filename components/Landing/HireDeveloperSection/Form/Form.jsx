import styles from "./Form.module.less";
import { useState, useEffect } from "react";
import { Check as CheckIcon } from "components/Icons";
import { CircularProgress } from "@material-ui/core";
import dynamic from "next/dynamic";
const Successful = dynamic(() => import("components/Landing/Successful"));

const Form = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [referer, setReferer] = useState("");
  const [page, setPage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const { msisdn, email } = formProps;
    if (msisdn || email) {
      setLoading(true);
      let headers = new Headers();

      fetch("/api/v1/contact/request", {
        method: "POST",
        headers: headers,
        body: formData,
        credentials: "include",
      })
        .catch((error) => console.error(error))
        .then((res) => {
          e.target.reset();
          setLoading(false);
          if (!res.ok) {
            return setErrors((prev) => {
              return {
                ...prev,
                server: "Something went wrong. Try again later.",
              };
            });
          }
          setSuccess(true);
        });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          msisdn: "Please enter your Email or/and Phone number",
        };
      });
    }
  };

  const getValidityMessage = (validity, name) => {
    if (validity.valueMissing) {
      return `${name}, please.`;
    } else if (validity.tooShort) {
      return `Too short`;
    } else if (validity.tooLong) {
      return `Too long`;
    }
    return `Must be valid`;
  };

  const onError = ({ target }) => {
    if (!Object.keys(errors).includes(target.name)) {
      const message = getValidityMessage(target.validity, target.placeholder);
      setErrors((prev) => {
        return { ...prev, [target.name]: message };
      });
    }
  };

  const handleCloseSuccess = () => setSuccess(false);
  const clearErrors = () => Object.keys(errors).length && setErrors({});

  useEffect(() => {
    const referer = localStorage.getItem("referer");
    if (referer) setReferer(referer);
    if (window.location.href) setPage(window.location.href);
  }, []);
  return (
    <form
      className={styles.form}
      onChange={clearErrors}
      onInvalid={onError}
      onSubmit={handleSubmit}
    >
      {success && <Successful onClose={handleCloseSuccess} />}
      <div className={styles.content}>
        <h3 className={styles.header}>Get Free Quote Now!</h3>
        <p className={styles.paragraph}>
          <i className={styles.paragraph__i}>
            <CheckIcon className={styles.paragraph__i__icon} />
          </i>
          <span className={styles.paragraph__text}>Safe & Confidential</span>
        </p>
        <input type="hidden" value={referer} name="referer" />
        <input type="hidden" value={page} name="page" />
        <input type="hidden" value="landingTop" name="cta" />
        <label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your name"
            name="name"
            required
            maxLength={22}
            minLength={3}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </label>
        <label>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            name="email"
            maxLength={40}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </label>
        <label>
          <input
            type="tel"
            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
            maxLength={15}
            className={styles.input}
            placeholder="Phone number"
            name="msisdn"
          />
          {errors.msisdn && <p className={styles.error}>{errors.msisdn}</p>}
        </label>
        <label>
          <input
            type="text"
            className={styles.input}
            placeholder="Leave your message"
            name="message"
            maxLength={200}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </label>
        {errors.server && <p className={styles.error}>{errors.server}</p>}
        <button type="submit" className={styles.button}>
          {!loading ? "Submit" : <CircularProgress colorprimary="#fff" />}
        </button>
      </div>
    </form>
  );
};
export default Form;
