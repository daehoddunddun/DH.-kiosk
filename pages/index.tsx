import Link from "next/link";
import css from "styled-jsx/css";
import Head from "next/head";
import styles from "../styles/test.module.css";

const style = css`
  .title {
    font-size: 40px;
    color: red;
  }
  p {
    font-size: 200px;
  }
`;

const index = () => {
  return (
    <>
      <Head>
        <title>Next.js-Head 사용하기</title>
      </Head>
      <>
        <style jsx>{style}</style>
        <p className="title">style.jsx 사용하기</p>
      </>
      <>
        <h1>global.css 사용하기</h1>
        <p className={styles.textColor}>css.module 사용하기</p>
        <p className={`${styles.textColor} ${styles.secondClass}`}>
          두 개 이상의 css.module 사용하기
        </p>
        <Link href="/login" className={styles.linkStyle}>
          Link 태그 사용하기/css 적용하기
        </Link>
      </>
    </>
  );
};

export default index;
