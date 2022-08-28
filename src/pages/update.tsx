import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Article } from 'src/shared/types';
import Link from 'next/link';

type Inputs = {
    title: string;
    description: string;
    body: string;
    errors: string;
  };

type ArticleProps = {
  articles: Article[];
};

export const getServerSideProps: GetServerSideProps<
    ArticleProps
> = async () => {
    const response = await apiClient.get<Article[]>('/api/articles');
    return { props: { articles: response.data } };
};


const Update: NextPage<ArticleProps> = (props) => {
  const { articles } = props;

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.id}: {article.title}: {article.description}:{article.body} <Link href="/edit">更新</Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>ホームへ</a>
      </Link>
    </div>
  );
};

export default Update;
