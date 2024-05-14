import React from "react";
import Title from "../Common/Title";

function Education() {
  return (
    <section className="container max-sm:p-5">
      <div className="flex flex-col gap-5">
        <h1>Education</h1>
        <div>
          <strong>교육</strong>
          <p>패스트캠퍼스 프론트엔드 개발 과정 5기</p>
          <p>2023.03~2023.10</p>
        </div>
        <div>
          <strong>대학교</strong>
          <p>충북대학교 경제학과 졸업</p>
          <p>2013.03~2017.02</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
