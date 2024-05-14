import React from "react";
import Title from "../Common/Title";
import Link from "next/link";
import Image from "next/image";
import Github from "@/assets/github.svg";
import link from "@/assets/link_alt.svg";
import Tag from "../Common/Tag";

function SweetHome() {
  const STACKS = ["React", "TypeScript", "Redux", "SCSS"];

  return (
    <section className="container max-sm:p-5">
      <div className="sm:w-1/2">
        <Title content="Project 03" />
        <h1 className="mb-5">스윗홈</h1>
        <p>
          라이프 스타일 편집샵을 컨셉으로 살려 회원가입 및 로그인, 상품 구매,
          마이페이지 등의 가상의 이커머스를 경험할 수 있습니다. 또한, 회원 관리
          및 상품 관리 등의 관리자 페이지를 개발하며 가상의 쇼핑몰을 운영할 수
          있습니다.
        </p>
        <br />
        <p>
          <strong>주요 기능</strong>
          <br />
          - 장바구니 기능을 활용해 상품 결제 시스템 구축 <br />- 상품 카테고리별
          필터를 통해 원하는 상품만 확인할 수 있는 기능 <br />- 마이페이지에서
          결제 상품 목록과 결제 계좌 관리, 개인 정보 수정 가능
        </p>
        <p className="mt-4 pt-4 border-t-[1px] ">기간 : 2023. 05 ~ 2023. 07</p>

        <p>담당 역할 : 기획, 디자인, 프론트엔드 개발</p>

        <div className="flex gap-2 items-center">
          <Link
            href={"https://github.com/FE5-TEAM9/sweethome"}
            className="flex items-center gap-2"
          >
            <Image src={Github} width={20} height={20} alt="github" />
            Github
          </Link>
          <Link
            href={"https://fe5-team9.github.io/sweethome/"}
            className="flex items-center"
          >
            <Image src={link} width={30} height={30} alt="demo" />
            Demo
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
          src="/sweetHome.png"
          width={333}
          height={444}
          alt="feed"
          className="shadow-2xl max-sm:hidden"
        />
      </div>
    </section>
  );
}

export default SweetHome;
