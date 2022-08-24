import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { User } from 'src/shared/types';

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
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
