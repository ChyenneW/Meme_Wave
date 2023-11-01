import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { SideNav } from "~/components/navigation/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Meme Wave</title>
        <meta
          name="description"
          content="This app live searches for gifs while the user is talking."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-3 flex items-center gap-3">
        <SideNav />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
