import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Article } from 'src/shared/types';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type ArticleProps = {
  articles: Article[];
};

export const getServerSideProps: GetServerSideProps<
  ArticleProps
> = async () => {
  const response = await apiClient.get<Article[]>('/api/articles');
  return { props: { articles: response.data } };
};

const Article: NextPage<ArticleProps> = (props) => {
  const { articles } = props;

  return (
    <div>
      <Header />
      <h1 className="flex justify-center text-4xl m-8">Articles</h1>
      <div className="flex justify-center">
        <table className="table-auto max-w-screen-xl">
          <thead>
            <tr>
              <th className="border px-4 py-2">記事ID</th>
              <th className="border px-4 py-2">記事名</th>
              <th className="border px-4 py-2">記事概要</th>
              <th className="border px-4 py-2">記事要約</th>
              <th className="border px-4 py-2">記事登録日</th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr>
                <td className="border px-4 py-2">{article.id}</td>
                <td className="border px-4 py-2">{article.title}</td>
                <td className="border px-4 py-2">{article.description}</td>
                <td className="border px-4 py-2">{article.body}</td>
                <td className="border px-4 py-2">{article.createdAt}</td>
                <td className="border px-4 py-2 bg-teal-400 text-blue-800">
                  <button>更新</button>
                </td>
                <td className="border px-4 py-2 bg-red-400">
                  <button>削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8">
        <button className="p-4 bg-orange-600 text-white rounded-lg">
          <Link href="/">
            <a>ホームへ</a>
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
