import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { login } from "../../store/actions/userAction";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const token = useSelector((state) => state.userReducer.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && token !== "") {
      localStorage.setItem("token", token);
    } else {
      localStorage.setItem("token", "");
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    dispatch(login(data));
    form.restart();
    navigate("/dashboard");
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
    <Dialog
      visible={true}
      closable={false}
      breakpoints={{
        "640px": "100vw",
      }}
    >
      <div className="form-demo">
        <div className="flex justify-content-center">
          <div className="card">
            <h5 className="text-center">Login</h5>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                email: "",
                password: "",
              }}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label p-input-icon-right">
                          <i className="pi pi-envelope" />
                          <InputText
                            id="email"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Email*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label">
                          <Password
                            id="password"
                            {...input}
                            toggleMask
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="password"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Password*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Button type="submit" label="Submit" className="mt-2" />
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default LoginForm;
