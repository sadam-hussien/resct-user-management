import { ErrorMessage, Field, Form, Formik } from "formik";

import { Button } from "react-bootstrap";

export default function View({ handleClose, data }) {
  return (
    <Formik
      initialValues={{
        id: data?.data?.id,
        name: data?.data?.name || "",
        email: data?.data?.email || "",
        phone: data?.data?.phone || "",
      }}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label htmlFor="user-name" className="mb-2">
              Name
            </label>
            <Field
              disabled={true}
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
              disabled={true}
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
              disabled={true}
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
              type="button"
              variant="danger"
              className="text-capitalize"
              onClick={handleClose}
            >
              cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
