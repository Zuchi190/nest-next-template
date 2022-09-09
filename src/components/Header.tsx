import foo from '../../public/images/logo.svg';
import Link from 'next/link';

function Header() {
  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-8 ">
        <nav className="flex items-center justify-between font-bold text-white">
          <a href="/"><img src={foo.src} alt="test" /></a>
          <div className="hidden h-10 font-alata md:flex md:space-x-8 items-center">
            <div className="group">
              <Link href="/user">
                <a>ユーザー一覧</a>
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="/article">
                <a className="">記事一覧へ</a>
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="/form">
                <a>記事登録へ</a>
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <Link href="/update">
                <a>記事更新へ</a>
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </nav>
        {/* <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impress Experieces That Deliver
        </div> */}
      </div>
    </section>
  );
}

export default Header;
