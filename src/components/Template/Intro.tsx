import Image from "next/image";
import arrowDown from "@/assets/DoubleArrowDown.svg";

interface IntroProps {
  scrollTo: React.MouseEventHandler<HTMLButtonElement>;
}
function Intro({ scrollTo }: IntroProps) {
  return (
    <section className="w-full h-screen">
      <div
        className="z-[-1] absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: 'url("/mypic.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="animate-pulse flex flex-col items-center gap-4 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-3xl font-bold">
          <span className="">안녕하세요!</span>
          <span>사용자를 먼저 생각하는 개발자,</span>
          <span>조은상입니다.</span>
        </div>
        <button
          type="button"
          onClick={scrollTo}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[60px] y-[60px]"
        >
          {" "}
          <Image
            src={arrowDown}
            width={60}
            height={60}
            alt="next Page Icon"
            className=" animate-bounce "
          />
        </button>
      </div>
    </section>
  );
}

export default Intro;
