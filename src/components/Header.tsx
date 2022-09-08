import foo from '../../public/images/logo.svg';

function Header() {
  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={foo.src} alt="test" />
        </nav>
      </div>
    </section>
  );
}

export default Header;
