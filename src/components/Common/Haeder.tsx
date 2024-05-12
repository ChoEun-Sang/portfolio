"use client";
import Link from "next/link";
import Image from "next/image";
import Github from "@/assets/github.svg";
import Velog from "@/assets/velog.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Button from "./Button";

function Haeder() {
  const onClickBtn = () => {
    alert("준비중입니다.");
  };
  return (
    <header className="fixed top-0 w-full p-4 flex justify-between items-center">
      <h1>ChoEunSang</h1>
      <div className="flex gap-5 items-center">
        <div className="flex gap-5 items-center max-sm:invisible">
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
        <Button onClick={onClickBtn} className="shrink-0">
          <span>연락처 남기기</span>
        </Button>
      </div>
    </header>
  );
}

export default Haeder;
