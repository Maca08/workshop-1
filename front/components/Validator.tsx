'use client';

import axios from 'axios';
import type { FormikHelpers } from 'formik';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';

interface Values {
  token: string;
}

const Validator = () => {
  const [response, setResponse] = useState<string>('');
  const handleSubmit = (values: Values, helper: FormikHelpers<Values>) => {
    console.log(values);
    axios
      .post('/api/validate', values)
      .then((res) => {
        console.log(res);
        setResponse(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err,'ERRRORR');
        setResponse('');
        helper.setErrors({ token: 'Invalid token' });
      });
  };
  return (
    <div>
      <Formik
        initialValues={{
          token: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-col gap-4">
          <Field name="token" placeholder="Token" component="textarea" />
          <ErrorMessage name="token" />
          <button className='bg-blue-700 text-white' type="submit">Submit</button>
        {response && <div>{response}</div>}</div>  
        </Form>
      </Formik>
    </div>
  );
};

export default Validator;
