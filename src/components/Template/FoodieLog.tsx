import React from "react";
import Title from "../Common/Title";
import Link from "next/link";
import Image from "next/image";
import Github from "@/assets/github.svg";
import link from "@/assets/link_alt.svg";
import Tag from "../Common/Tag";

function FoodieLog() {
  const STACKS = [
    "Next.js",
    "TypeScript",
    "Zustand",
    "Tailwind",
    "React-Query",
  ];

  return (
    <section className="container max-sm:p-5">
      <div className="sm:w-1/2">
        <Title content="Project 01" />
        <h1 className="mb-5">푸디로그</h1>
        <p>
          커뮤니티 중심의 맛집 리뷰 PWA 개발하여 사용자가 나의 맛집 공유를 넘어
          함께 소통의 공간을 제공합니다. 지역별 추천 식당 기능과, 좋아요, 댓글
          등 맛집 커뮤니티를 이룰 수 있는 새로운 맛집 공유 서비스를 경험할 수
          있습니다.
        </p>
        <br />
        <p>
          <strong>주요 기능</strong>
          <br />
          - Kakao Map API를 사용해 자신만의 맛집을 지도 표시할 수 있는 재미와
          편의성 제공 <br />- 무한스크롤을 활용해 지속적으로 콘텐츠 제공하여
          사용자 체류 시간을 높임 <br />- PWA 환경에서 Firebase FCM 토큰을
          서비스 서버에 전달하여 알림 기능 구현
        </p>
        <p className="mt-4 pt-4 border-t-[1px] ">기간 : 2024.02 ~ 2024.04</p>

        <p>담당 역할 : 프론트엔드 팀장, 개발, 앱 출시</p>

        <div className="flex gap-2 items-center">
          <Link
            href={"https://github.com/ChoEun-Sang/foodie-log-client.git"}
            className="flex items-center gap-2"
          >
            <Image src={Github} width={20} height={20} alt="github" />
            Github
          </Link>
          <Link
            href={"https://www.foodielog.shop/"}
            className="flex items-center"
          >
            <Image src={link} width={30} height={30} alt="demo shadow-xl" />
            Demo
          </Link>
        </div>

        <div className="flex gap-2 items-center flex-wrap mt-3">
          {STACKS.map((stack) => (
            <Tag key={stack} content={stack} />
          ))}
        </div>
      </div>
      <div className="justify-end">
        <Image
          src="/feed.png"
          width={270}
          height={670}
          alt="feed"
          className="shadow-2xl max-sm:hidden"
        />
      </div>
    </section>
  );
}

export default FoodieLog;
