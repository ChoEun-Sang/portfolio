# 포트폴리오
> 개발자: 조은상 \
> URL: https://choeunsang-portfolio.vercel.app/ \
> 기술 스택: Next.js, Typescript, Tailwind Css, Supabase


## 사이트맵
<img width="500" alt="사이트맵" src="https://github.com/ChoEun-Sang/portfolio/assets/128155681/19f14ade-5670-4edb-9fa3-df504949ac63">

## DB 스키마
```
CREATE TABLE Contact (
    id INT PRIMARY KEY,
    name TEXT,
    contact TEXT
);
```

## 프로젝트 소개

### 1. 반응형 디자인
CSS의 미디어 쿼리를 사용하여 화면 크기가 변경될 때 컨텐츠의 배치가 유연하게 조정됩니다.  \
어느 디바이스에서든 포트폴리오 내용을 확인할 수 있도록 만들었습니다.

- 데스트탑 Footer 화면

<img width="500" alt="데스크탑 화면" src="https://github.com/ChoEun-Sang/portfolio/assets/128155681/0d3d5bb6-2a70-44a0-9315-2d5b927795216">

<br/>

- 모바일 Footer 화면
  
<img width="300" alt="데스크탑 화면" src="https://github.com/ChoEun-Sang/portfolio/assets/128155681/423ff7b0-25f7-4857-9076-8a8e21bddbaf">

### 2. Full Page Scroll
스크롤할 때 뷰포트에 맞게 다음 섹션을 이동하여 내용을 한눈에 보기 쉽습니다.

<img src="https://github.com/ChoEun-Sang/portfolio/assets/128155681/dc1e72d7-8d00-44b6-88bb-3f144c0660b6" alt="시험 화면 gif" width="300">

### 3, 연락처 등록/조회
Supabase를 이용하여 연락처 등록/조회 API를 만들었습니다. \
연락처를 등록하면 등록된 연락처 목록이 조회돼 연락처가 등록된 것을 확인할 수 있습니다. \
개인정보보호를 위해 이름과 연락처는 마스킹 처리한 후 화면에 보여집니다. 

<img width="500" alt="데스크탑 화면" src="https://github.com/ChoEun-Sang/portfolio/assets/128155681/7482034c-240b-4251-89c7-1760621a2c1d">

## 프로젝트 테스트

### clone project

```bash
$ git clone git@github.com:ChoEun-Sang/portfolio.git
```

### go to project
```bash
$ cd portfolio
```
### install npm
```bash
$ npm install
```
### start project
```bash
$ npm run dev
```
