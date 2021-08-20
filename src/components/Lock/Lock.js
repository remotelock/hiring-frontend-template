import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toggleLock, getUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../redux/selectors";
import classes from "./Lock.module.css";

const checkPinCode = ({ users, pinCode }) => {
  const validPinCode = users.entities.some((item) => {
    const validPinCodeValue = item.attributes.pin === String(pinCode);

    let validDate = true;
    if (item.attributes.starts_at && item.attributes.starts_at) {
      validDate =
        new Date(item.attributes.starts_at) < new Date() &&
        new Date(item.attributes.ends_at) > new Date();
    }
    if (validPinCodeValue && validDate) return true;
    return false;
  });

  return validPinCode;
};

const Lock = (props) => {
  const { id, closeForm } = props;

  const [wrongPinCode, setWrongPinCode] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  useEffect(() => {
    if (!users.loaded && !users.loading) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!users?.loaded) {
    return <div>LOADING</div>;
  }

  const SignupSchema = Yup.object().shape({
    pinCode: Yup.string()
      .min(4, "Too short pin code")
      .max(6, "Too long pin code")
      .required("Required"),
  });

  return (
    <div className={classes.authWrapper}>
      <span className={classes.title}>Enter pin code</span>
      <Formik
        initialValues={{
          pinCode: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          if (checkPinCode({ ...values, users })) {
            dispatch(toggleLock({ id }));
            closeForm(false);
          } else {
            setWrongPinCode(true);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className={classes.pinCodeForm}>
            <Field
              className={classes.pinCodeInput}
              name='pinCode'
              type='number'
            />
            {errors.pinCode && touched.pinCode ? (
              <div className={classes.error}> {errors.pinCode}</div>
            ) : null}
            {wrongPinCode ? (
              <div className={classes.error}> Access is denied, try again</div>
            ) : null}

            <div className={classes.accessBtnWrapper}>
              <button className={classes.accessBtn} type='submit'>
                get access
              </button>
              <button
                className={classes.cancelBtn}
                onClick={() => closeForm(false)}
              >
                cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Lock;
