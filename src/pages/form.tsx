import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { apiClient } from 'src/shared/lib/apiClient';

type Inputs = {
  title: string;
  description: string;
  //exampleRequired: string;
  body: string;
  errors: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    apiClient.post('/api/articles', data);
    console.log(`タイトルは${data.title}、感想は${data.description}です`);
    reset();
  };
  // watch input value by passing the name of it

  console.log(watch('title'));
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="記事タイトル"
        {...register('title', { required: true })}
      />
      {errors.title && '文字が入力されていません'}
      <br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input
         placeholder="感想"
        {...register('description', { required: true })}
      />
        {errors.description && '10文字以内でお願いします'}
        <br/>
      <input placeholder="総括" {...register('body', { required: true })} />
      {errors.body && '総括は必須です'}
      <br/>
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <div>{errors.title && <span>This field is required</span>}</div>
      <input type="submit" />
    </form>
  );
}
