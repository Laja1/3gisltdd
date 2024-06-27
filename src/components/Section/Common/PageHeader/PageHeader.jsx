import Link from "next/link";

const PageHeader = ({ title }) => {
  return (
    <div className="zubuz-breadcrumb">
      <div className="container">
        <h1 className="lg:text-6xl md:text-5xl text-4xl  font-bold post__title">{title}</h1>
        
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{" "}{title}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
