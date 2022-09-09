import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { apiClient } from 'src/shared/lib/apiClient';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Inputs = {
  title: string;
  description: string;
  body: string;
  errors: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    apiClient.post('/api/articles', data);
    console.log(`タイトルは${data.title}、感想は${data.description}です`);
    reset();
  };
  // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div >
      <Header />
      <div className="flex justify-center py-20 px-10 bg-purple-700 min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <p className="mb-4 text-red-500 ">記事タイトル</p>
          <input
            placeholder="記事タイトル"
            className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-red-600"
        {...register('title', { required: true })}
      />
      {errors.title && '文字が入力されていません'}
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <p className='mb-4 text-red-500 '>感想</p>
      <input
        placeholder="感想"
        className='block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-purple-600'
        {...register('description', { required: true })}
      />
      {errors.description && '10文字以内でお願いします'}
      <br />
      <p className='mb-4 text-red-500 '>総括</p>
      <input className='block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-purple-600'placeholder="総括" {...register('body', { required: true })} />
      {errors.body && '総括は必須です'}
      <br />
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <div>{errors.title && <span>This field is required</span>}</div>
          {/* <input
            type="submit"
            value="送信する"
            className="text-white " /> */}
        <div className='flex justify-center mt-4'>
      <button className="inline-block bg-yellow-500 text-black rounded shadow py-2 px-5 text-sm mx-auto">
          送信する
        </button>
        </div>
    </form>
      </div>
    
    <Footer />
    </div>
  );
}
