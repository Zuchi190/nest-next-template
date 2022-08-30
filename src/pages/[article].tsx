import { useRouter } from 'next/router';

const Person = () => {
  //routerオブジェクトを用意
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>{router.query.article}のPageです</h1>
      {/*routerオブジェクトでクエリストリングを取り出す */}
      Hello {router.query.article} !
    </div>
  );
};

export default Person;