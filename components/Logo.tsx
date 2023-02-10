import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={30}
        width={30}
        src="https://placeimg.com/460/460/people"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
