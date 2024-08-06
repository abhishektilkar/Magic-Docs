import { auth } from "@clerk/nextjs/server";
import React, { Suspense } from "react";
import IntroPage from "./intro-page";
import { NewDocument } from "./new-document";
import RecentDocument from "./recent-document";

const CustomLoader = () => (
  <div className="flex justify-center items-center mt-24">
    <div className="border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full w-16 h-16 animate-spin"></div>
  </div>
);

export const Dashboard = () => {
  const { userId } = auth();

  if (!userId) {
    return <IntroPage />;
  }

  return (
    <div>
      {/* New Document */}
      <Suspense fallback={<CustomLoader />}>
        <NewDocument />
      </Suspense>

      {/* Recent Document */}
      <Suspense fallback={<CustomLoader />}>
        <RecentDocument />
      </Suspense>
    </div>
  );
};
