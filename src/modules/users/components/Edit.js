import { useState } from "react";

import * as Yup from "yup";

import { Form, Formik, Field, ErrorMessage } from "formik";

import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { editUser } from "../store";

export default function Add({ handleClose, data }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(values) {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(editUser(values));
      handleClose();
    }, 1000);
  }

  // schema
  const schema = Yup.object().shape({
    name: Yup.string().required("this field is required"),
    email: Yup.string()
      .email("enter valid email")
      .required("this field is required"),
    phone: Yup.string().required("this field is required"),
  });

  return (
    <Formik
      initialValues={{
        id: data?.data?.id,
        name: data?.data?.name || "",
        email: data?.data?.email || "",
        phone: data?.data?.phone || "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label htmlFor="user-name" className="mb-2">
              Name
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`form-control`}
              id="user-name"
            />
            <ErrorMessage name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="user-email" className="mb-2">
              Email
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`form-control`}
              id="user-email"
            />
            <ErrorMessage name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="user-phone" className="mb-2">
              Phone
            </label>
            <Field
              type="text"
              name="phone"
              placeholder="Enter your Phone"
              className={`form-control`}
              id="user-phone"
            />
            <ErrorMessage name="phone" />
          </div>

          <div className="d-flex align-items-center gap-4">
            <Button
              type="submit"
              variant="primary"
              className="text-capitalize"
              disabled={isLoading}
            >
              update user
            </Button>
            <Button
              type="button"
              variant="danger"
              className="text-capitalize"
              onClick={handleClose}
              disabled={isLoading}
            >
              cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
