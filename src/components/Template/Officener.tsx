import React from "react";
import Title from "../Common/Title";
import Link from "next/link";
import Image from "next/image";
import Github from "@/assets/github.svg";
import Tag from "../Common/Tag";

function Officener() {
  const STACKS = ["Next.js", "TypeScript", "Zustand", "Emotion"];

  return (
    <section className="container max-sm:p-5">
      <div className="sm:w-1/2">
        <Title content="Project 02" />
        <h1 className="mb-5">오피스너</h1>
        <p>
          리버블 앱의 건물 입주사 일반인 가입자 및 WAU 상승 목표로, Pain Point를
          해결할 솔루션과 유저에게 흥미를 줄 요소를 제공하는 기업 연계
          프로젝트입니다. 방문자 초대 및 점심 메뉴 추천, 리뷰 공유 등의 기능을
          통해 완성도 높은 서비스를 제공하여 최우수 프로젝트로 선정되었습니다.
        </p>
        <br />
        <p>
          <strong>주요 기능</strong>
          <br />
          - 방문자 초대, 출입 관리, 주차관리 등 Pain Point를 해결하는 실질적인
          솔루션 기능 제공 <br />- 메뉴 고르기, 점심 정보 공유, 포인트 등 유저가
          흥미를 가지고 유입할 수 있는 요소 제공
        </p>
        <p className="mt-4 pt-4 border-t-[1px] ">
          기간 : 2023. 08. 16 ~ 2023. 10. 10
        </p>

        <p>담당 역할 : 오늘 점심 파트 개발</p>

        <div className="flex gap-2 items-center">
          <Link
            href={"https://github.com/livable-final/client"}
            className="flex items-center gap-2"
          >
            <Image src={Github} width={20} height={20} alt="github" />
            Github
          </Link>
        </div>

        <div className="flex gap-2 items-center flex-wrap mt-3">
          {STACKS.map((stack) => (
            <Tag key={stack} content={stack} />
          ))}
        </div>
      </div>
      <div>
        <Image
          src="/officener.png"
          width={270}
          height={670}
          alt="feed"
          className="shadow-2xl max-sm:hidden"
        />
      </div>
    </section>
  );
}

export default Officener;
