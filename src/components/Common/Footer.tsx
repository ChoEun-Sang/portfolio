import Link from "next/link";
import Image from "next/image";
import Github from "@/assets/github.svg";
import Velog from "@/assets/velog.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Tag from "./Tag";

function Footer() {
  const STACKS = [
    "React",
    "Next.js",
    "TypeScript",
    "Zustand",
    "Tailwind",
    "Emotion",
    "SCSS",
  ];

  return (
    <section
      className="container max-sm:grid max-sm:grid-rows-3  sm:grid sm:grid-cols-2
    "
    >
      <div className="flex flex-col justify-center items-center gap-y-1 sm:col-span-1 max-sm:order-2">
        <strong>조은상</strong>
        <strong>good_sang@naver.com</strong>
        <div className="mt-5 flex gap-4">
          <Link href={"https://github.com/ChoEun-Sang"}>
            <Image src={Github} alt="github" width={30} height={30} />
          </Link>
          <Link href={"https://velog.io/@good_sang"}>
            <Image src={Velog} alt="velog" width={30} height={30} />
          </Link>
          <Link href={"https://www.linkedin.com/in/choeunsang/"}>
            <Image src={LinkedIn} alt="linkedin" width={30} height={30} />
          </Link>
        </div>
        <div className="w-1/2 mt-5 flex gap-2 justify-center flex-wrap">
          {STACKS.map((stack) => (
            <Tag key={stack} content={stack} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-bold text-xl sm:col-span-1 max-sm:order-1">
        <span>내일도 사용자에게</span>
        <span>서비스의 가치를 전달하기 위해</span>
        <span>노력하겠습니다.</span>
      </div>
      <div className="sm:col-span-2 flex justify-center items-end text-sm max-sm:order-3">
        <span className="pb-4">© 2024. Cho Eun Sang. All rights reserved.</span>
      </div>
    </section>
  );
}

export default Footer;
