import { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Personal } from 'src/shared/types';
import { useForm, SubmitHandler } from 'react-hook-form';

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
  }

  return (
    <div>
      <h1>更新データページ</h1>
      
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

      <form onSubmit={handleSubmit(onUpdate)}>
      {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue={article.title} {...register('title')} />
        <br/>
        <input defaultValue={article.description} {...register('description')} />
        <br/>
        <input defaultValue={article.body} {...register('body')} />
        <br/>
        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
       <br/>
        <input type="submit" />
    </form>
      {/* <h1>{router.query.article}のPageです</h1> */}
      {/*routerオブジェクトでクエリストリングを取り出す */}
      {/* Hello {router.query.article} ! */}
    </div>
  );
};

export default Person;
