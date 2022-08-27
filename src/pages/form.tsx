import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { apiClient } from 'src/shared/lib/apiClient';

type Inputs = {
  title: string;
  description: string;
  //exampleRequired: string;
  body: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    //watch,
    reset,
    //formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    apiClient.post('/api/articles', data);
    console.log(`タイトルは${data.title}、感想は${data.description}です`);
    reset();
  };
  // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="タイトル" {...register('title')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        defaultValue="感想"
        {...register('description', { required: true })}
      />
      <input defaultValue="ボディー" {...register('body')} />

      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>
  );
}
