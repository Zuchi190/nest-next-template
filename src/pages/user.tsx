import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { User } from 'src/shared/types';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type UserProps = {
  users: User[];
};

export const getServerSideProps: GetServerSideProps<UserProps> = async () => {
  const response = await apiClient.get<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  );
  return { props: { users: response.data } };
};

const User: NextPage<UserProps> = (props) => {
  const { users } = props;

  return (
    <div>
      <Header />
      <h1 className="flex justify-center m-8 text-2xl font-sans">
        ユーザー一覧ページ
      </h1>
      <div className="flex justify-center">
        <table className="table-auto ">
          <thead>
            <tr>
              <th className="border px-4 py-2">ユーザーID</th>
              <th className="border px-4 py-2">ユーザー名</th>
              <th className="border px-4 py-2">メールアドレス</th>
              <th className="border px-4 py-2">住所</th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.address['city']}</td>
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

export default User;
