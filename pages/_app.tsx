import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "../styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>DH.Kiosk</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
