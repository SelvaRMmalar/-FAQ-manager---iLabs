import React from 'react';
import { withFormik } from 'formik';
import { boolean, object, string } from 'yup';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Textarea from '../../Components/TextArea';

function Form({
  isValid,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleFocus,
  handleSubmit,
  isSubmitting,
}) {
 
  return (
    <form onSubmit={handleSubmit} className='text-lg'>
      <div className='lg:visible md:visible sm:visible grid grid-row-3 p-6'>
        <div>
          <Input
            type='text'
            label='Catogory'
            name='catogory'
            values={values}
            errors={errors}
            touches={touched}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            placeholder='Catogory'
          />
        </div>
        <div className='py-4 lg:visible md:visible sm:visible '>
          <Textarea
            rows={4}
            label='Question '
            name='question'
            values={values}
            errors={errors}
            touches={touched}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            placeholder='Please enter  question  here'
          />
        </div>
        <div className='flex justify-end p-2'>
          <Button
            name={isSubmitting ? 'submit...' : 'submit'}
            disabled={!isValid || isSubmitting}
            type='submit'
            className='p-1 lg:px-4 md:mx-2 text-xs text-white text-center border border-solid rounded-xl bg-blue-600 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 '
          />
        </div>
      </div>
    </form>
  );
}

export default withFormik({
  validationSchema: object().shape({
    catogory: string().required('catogory is a required field'),
    question: string().nullable('question is a required field'),
    isActive: boolean().nullable(),
  }),
  mapPropsToValues: ({ item = { isActive: true } }) => ({
    catogory: item.catogory,
    question: item.question,
    isActive: item.isActive,
  }),
  handleSubmit: (values, { props, ...actions }) => {
    props.onSubmit(values, actions);
  },
})(Form);
