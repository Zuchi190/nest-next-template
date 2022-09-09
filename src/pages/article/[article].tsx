import { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Personal } from 'src/shared/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import Router from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type Update = {
  title: string;
  description: string;
  body: string;
  exampleRequired: string;
};

type ArticleProps = {
  article: Personal[];
};

export const getServerSideProps: GetServerSideProps<ArticleProps> = async (
  context,
) => {
  // console.log(`これは${context}`);
  console.log(context.query.id);
  const id = context.query.id;
  const response = await apiClient.get<Personal[]>(`/edit/${id}`);
  return { props: { article: response.data } };
};

const Person: NextPage<ArticleProps> = (props) => {
  const { article } = props;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Update>();


  const onUpdate: SubmitHandler<Update> = (data) => {
    apiClient.patch(`/update/${article.id}`, data);
    console.log(`idは${article.id}です`)
    console.log(
      `タイトルは${data.title}、感想は${data.description}です、本文は${data.body}です`,
    );
    Router.push('/update');
  }

  return (
    <div>
      <Header/>
      
      {/* <ul>
        <li key={article.id}>
          ①{article.id}
          <br />②{article.title}
          <br />③{article.description}
          <br />④{article.body}
          <br />⑤{article.createdAt}
          <br />⑥{article.updatedAt}
        </li>
      </ul> */}
        <div className='flex justify-center bg-purple-700 text-white'>
           <h1　className='text-4xl m-8'>更新データページ</h1>
        </div>
      <div className="flex justify-center py-20 px-10 bg-purple-700 min-h-screen">
      <form onSubmit={handleSubmit(onUpdate)}>
      {/* register your input into the hook by invoking the "register" function */}
      <p className="mb-4 text-white ">記事名</p>
        <input defaultValue={article.title} {...register('title')} className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-red-600"/>
        <br/>
        <p className="mb-4 text-red-white ">記事概要</p>
        <input defaultValue={article.description} {...register('description')} className='block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-purple-600'/>
        <br/>
        <p className="mb-4 text-red-500 ">記事要約</p>
        <input defaultValue={article.body} {...register('body')} className='block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-purple-600'/>
        <br/>
        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
       <br/>
       <div className='flex justify-center mt-4'>
      <button className="inline-block bg-yellow-500 text-black rounded shadow py-2 px-5 text-sm mx-auto">
          送信する
        </button>
        </div>
    </form>
      {/* <h1>{router.query.article}のPageです</h1> */}
      {/*routerオブジェクトでクエリストリングを取り出す */}
      {/* Hello {router.query.article} ! */}
      <Footer />
      </div>
    </div>
  );
};

export default Person;
