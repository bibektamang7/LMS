"use client";

import { SessionProvider, useSession } from "next-auth/react";
import Loader from "./ui/Loader";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </SessionProvider>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader/>
        {/* You can replace the above with a spinner or a loading animation */}
      </div>
    );
  }

  // if (status === "unauthenticated") {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <p>You are not authenticated.</p>
  //       {/* Optionally, provide a redirect to login here */}
  //     </div>
  //   );
  // }

  return <>{children}</>;
}
