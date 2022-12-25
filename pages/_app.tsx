import "../styles/globals.scss";
import moment from "moment";
import 'moment/locale/id';
import type { AppProps } from "next/app";

moment.locale('id')

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
