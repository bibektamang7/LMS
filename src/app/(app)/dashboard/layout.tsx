import React from "react";
import ReduxProvider from "@/redux/Provider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </>
  );
};

export default layout;
