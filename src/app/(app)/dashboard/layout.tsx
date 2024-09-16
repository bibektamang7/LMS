import React from "react";
import ReduxProvider from "@/redux/Provider";
import Container from "@/components/Container";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReduxProvider>
        <Container>{children}</Container>
      </ReduxProvider>
    </>
  );
};

export default layout;
