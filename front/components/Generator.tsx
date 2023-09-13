"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik"

const server = 'http://localhost:8000';

const Generator = () => (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(values, helper) => {
            axios.post<{ token: string }>(`${server}/signin`, values).then((res) => {
                helper.setFieldValue('token', res.data.token);
            }).catch((err) => {
                console.log(err);
            });
        }}
      >
        <Form>
            <div className="flex flex-col gap-4">  
                <Field name="email" placeholder="Email" />
                <ErrorMessage name="email" />
                <Field disabled name="token" placeholder="Token" component="textarea" />
                <button className="bg-blue-700 text-white" type="submit">Submit</button>
            </div>
        </Form>
      </Formik>
    </div>
);

export default Generator
