import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
const progress = new ProgressBar({
  size: 4,
  className: "z-50",
  color: "#ff6b6b",
  delay: 100,
});

Router.events.on("routeChangeStart", () =>
  progress.start()
);
Router.events.on("routeChangeComplete", () =>
  progress.finish()
);
Router.events.on("routeChangeError", () =>
  progress.finish()
);

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <RecoilNexus />
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
