import React from "react";
import { Dashboard } from "./_components/Dashboard";
import { auth } from "@clerk/nextjs/server";
import IntroPage from "./_components/intro-page";

const DocumentPage = () => {

  const { userId } = auth();

  if (!userId) {
    return <IntroPage />;
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DocumentPage;