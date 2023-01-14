import Image from "next/image";
import css from "styled-jsx/css";
import { useRef } from "react";

export default function Loding() {
  const ref = useRef<any>(null);

  return (
    <div>
      <Image
        className="image"
        src="/main.jpg"
        layout="fill"
        onLoadingComplete={() => ref.current.remove()}
        alt="로딩이미지"
      />
      <div className="animation" ref={ref} />
    </div>
  );
}

const style = css`
  .animation {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: 50%;

    margin-left: -21px;
    margin-top: -21px;
    border-radius: 50%;

    border: 4px solid red;
    border-top-color: transparent;
    border-left-color: transparent;

    animation: Rotate 0.8s infinite linear;
    z-index: 100;
  }

  @keyframes Rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
