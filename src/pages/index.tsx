import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Story } from 'src/shared/types';
import Link from 'next/link';

type HomeProps = {
  stories: Story[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await apiClient.get<Story[]>('/api/stories');
  return { props: { stories: response.data } };
};

const Home: NextPage<HomeProps> = (props) => {
  const { stories } = props;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            {story.id}: {story.title}
          </li>
        ))}
      </ul>
      <Link href="/user">
        <a>こちら</a>
      </Link>
    </div>
  );
};

export default Home;