import ParallexImg from "./ParallexImg";
import Typo from "./Typo";

const Card = ({
  src,
  title,
  subtitle,
  className,
  imgClassName,
}: {
  src: string;
  title: string;
  subtitle: string;
  className?: string;
  imgClassName?: string;
}) => {
  return (
    <div className={className}>
      <ParallexImg className={`w-full ${imgClassName}`} src={src} />
      <Typo hidden font="serif" className="text-xl mt-2 capitalize">
        {title}
      </Typo>
      <Typo hidden font="base" className="text-black/50">
        {subtitle}
      </Typo>
    </div>
  );
};

export default Card;
