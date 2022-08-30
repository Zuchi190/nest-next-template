import { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Personal } from 'src/shared/types';

type ArticleProps = {
  article: Personal[];
};

export const getServerSideProps: GetServerSideProps<ArticleProps> = async (context) => {
  const id = 2;
  const response = await apiClient.get<Personal[]>(`/edit/${id}`);
  console.log(`これは${id}`);
  return { props: { article: response.data } };
};

const Person: NextPage<ArticleProps> = (props) => {
  const { article } = props;
  console.log(props)
  //routerオブジェクトを用意
  // const router = useRouter();
  // console.log(router.query);

  return (
    <div>
      {/* <h1>{router.query.article}のPageです</h1> */}
      {/*routerオブジェクトでクエリストリングを取り出す */}
      {/* Hello {router.query.article} ! */}
      <h1>更新データページ</h1>
      <ul>
         <li key={article.id}>
            ①{article.id}
            <br />
            ②{article.title}
          <br />③{article.description}
          </li>
      </ul>
    </div>
  );
};

export default Person;
