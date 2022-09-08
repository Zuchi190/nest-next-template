import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Story } from 'src/shared/types';
import Link from 'next/link';
import Header from '../components/Header';

type HomeProps = {
  stories: Story[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await apiClient.get<Story[]>('/api/stories');
  return { props: { stories: response.data } };
};

//apiClient.post('/api/articles');

const Home: NextPage<HomeProps> = (props) => {
  const { stories } = props;

  return (
    <div>
      <Header />
      <h1 className="font-bold text-6xl">Home</h1>
      <ul>
        {stories.map((story) => (
          <li className="text-yellow-600" key={story.id}>
            {story.id}: {story.title}
          </li>
        ))}
      </ul>
      <Link href="/user">
        <a className="text-3xl font-bold underline">こちら</a>
      </Link>
      <br />
      <Link href="/article">
        <a className="text-3xl font-bold underline">記事一覧へ</a>
      </Link>
      <br />
      <Link href="/form">
        <a className="text-yellow-600">記事登録へ</a>
      </Link>
      <br />
      <Link href="/update">
        <a>記事更新へ</a>
      </Link>
    </div>
  );
};

export default Home;
