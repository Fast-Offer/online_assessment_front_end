import React from 'react';
import { Formik } from 'formik';
import {
  Input,
  Button,
  Row,
  Col,
  Tag,
} from 'antd';
import { Link } from 'react-router-dom';
// import styles from './Form.module.less';
import addNewUser from '../../client';

const Form = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '', comfirmPassword: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email cannot be empty...';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address...';
        }
        if (values.password.length < 6) {
          errors.password = 'Password at least 6 digit...';
        }
        if (values.password !== values.comfirmPassword) {
          errors.comfirmPassword = 'Passwords not match...';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        addNewUser(values)
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        submitForm,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            // className={styles.input}
            style={{marginTop: '10px', marginBottom: '10px'}}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div style={{ textAlign: 'left' }}>
            {errors.email && touched.email && <Tag color="error">{errors.email}</Tag>}
          </div>
          <Input
            // className={styles.input}
            style={{ marginTop: '10px', marginBottom: '10px' }}
            type="password"
            name="password"
            placeholder="Password (6 digits at least &amp; case sensitive"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div style={{ textAlign: 'left' }}>
            {errors.password && touched.password && <Tag color="error">{errors.password}</Tag>}
          </div>
          <Input
            // className={styles.input}
            style={{ marginTop: '10px', marginBottom: '10px' }}
            type="password"
            name="comfirmPassword"
            placeholder="Comfirm password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comfirmPassword}
          />
          <div style={{ textAlign: 'left' }}>
            {errors.comfirmPassword && touched.comfirmPassword && <Tag color="error">{errors.comfirmPassword}</Tag>}
          </div>
          <div style={{ marginTop: '10px' }}>
            <Row>
              <Col span={8} style={{ textAlign: 'left' }}>
                <Button
                  type="primary"
                  onClick={() => {
                    submitForm()
                  }}
                  disabled={isSubmitting}
                  style={{ width: '80%' }}
                >
                  Register
                </Button>
              </Col>
              <Col span={8} offset={8} style={{ textAlign: 'right' }}>
                <Link
                  to="/login"
                >
                  Existing Account
                </Link>
              </Col>
            </Row>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
