import { db } from "@/utils/db";
import React from "react";
import EditorBlock from "./_components/editor-block";
import { auth } from "@clerk/nextjs/server";
import IntroPage from "../_components/intro-page";
import { redirect } from "next/navigation";

interface SingleDocumentProps {
  documentId: string;
}

interface DocumentProps {
  id: string;
  userId: string;
  title: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

type TypeValue = DocumentProps | null;

const SingelDocumentPage = async ({
  params,
}: {
  params: SingleDocumentProps;
}) => {

  const { userId } = auth();

  if (!userId) {
    redirect('/document');
  }
  const getDocument: TypeValue = await db.document.findUnique({
    where: {
      id: params.documentId,
    },
  });


  return (  
    <div className="mt-6">
      <EditorBlock document={getDocument} />
    </div>
  );
};

export default SingelDocumentPage;
