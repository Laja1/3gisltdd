import Link from "next/link";

const BrandLogo = ({ imageSrc }) => {
  const defaultImageSrc = "/images/logo/blueLogo.png";
  const logoSrc = imageSrc || defaultImageSrc;

  return (
    <div className="">
      <Link href="/">
        <img src={logoSrc} alt="" className="lg:w-64 imac:w-80 md:w-52 w-44" />
      </Link>
    </div>
  );
};

export default BrandLogo;
