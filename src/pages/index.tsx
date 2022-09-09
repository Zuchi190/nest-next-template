import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Story } from 'src/shared/types';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      {/* <div className="flex justify-evenly pt-8 p-8 bg-orange-50">
        <p>こんにちは</p>
        <p>ありがとう</p>
        <p>さよなら</p>
      </div> */}
      <p className="flex justify-center my-12 bg-orange-300 h-16 items-center">
        基本データ一覧
      </p>
      <div className="flex justify-evenly p-8">
        {stories.map((story) => (
          <div className="bg-blue-500" key={story.id}>
            <div className="box-border h-32 w-80 p-4 border-4 text-white flex justify-center">
          <p>
                ID:{story.id}<br />
                タイトル：{story.title}<br />
                概要：{story.description}<br />
          </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
