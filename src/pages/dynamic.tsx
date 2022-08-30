import Link from 'next/link';

const Dynamic = () => {
  // 適当な配列を作成
  const users = [
    { id: 1, name: 'tanaka' },
    { id: 2, name: 'yamada' },
    { id: 3, name: 'watanabe' },
  ];

  return (
    <div>
      <Link href="/About">
        <a>Aboutのページに遷移</a>
      </Link>
      {/* 配列の中身をmapし、urlに含まれる文字列を動的に変更 */}
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link as={`${user.name}`} href="[article]">
              <a>{user.name}</a>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Dynamic;
