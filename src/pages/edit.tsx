import { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Personal } from 'src/shared/types';
import Link from 'next/link';

type ArticleProps = {
  article: any;
};
export const getServerSideProps: GetServerSideProps<ArticleProps> = async (
  context,
) => {
  const id = context.query.keyword;
  const response = await apiClient.get<Array<Personal>>(`/edit/${id}`);
  return { props: { article: response.data } };
};

// export async function GetStaticProps(){
//   return {
//     props: [{ params: { id: '1' } }].
//   };
// }

const Edit: NextPage<ArticleProps> = (props) => {
  const { article } = props;

  return (
    <div>
      <h1>データ更新</h1>
      <ul>
        {/* {articles.map((article) => (
        ))} */}
        <li key={article.id}>
          ①{article.id}
          <br />②{article.title}
          <br />③{article.description}
        </li>
      </ul>
      <Link href="/">
        <a>ホームへ</a>
      </Link>
    </div>
  );
};

export default Edit;
