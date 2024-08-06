"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import plusImage from "../../../../public/docs-blank-googlecolors.png"

export const NewDocument = () => {
  const router = useRouter();
  const { toast } = useToast();

  const createNewDoc = async (
    title: string = "Untitled Document",
    description: string = ""
  ) => {
    try {
      const response = await axios.post("/api/document/new", {
        title: title,
        description: description,
      });

      toast({
        title: "Document Successfully Created!",
      });
      router.push(`/document/${response.data.id}`);
    } catch (error) {}
  };

  const TemplateMap = [
    {
      component: (
        <button onClick={() => createNewDoc()}>
          <div className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer border border-b-1 border-r-1">
            <div className="">
              {/* <Plus size={80} /> */}
              <Image src={plusImage} alt='' height={150} width={150}/>
            </div>
          </div>
        </button>
      ),
      footer: "Blank Document",
    },
    {
      component: (
        <button
          onClick={() =>
            createNewDoc(
              "Wizardly Template",
              `
              [Exposition] 


              [Rising Action] 


              [Climax] 


              [Falling Action] 

              
              [Denouement]`
            )
          }
        >
          <div className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer border border-b-1 border-r-1">
            <div className="">
              {/* <Plus size={80} /> */}
              <Image src={plusImage} alt='' height={150} width={150}/>
            </div>
          </div>
        </button>
      ),
      footer: "Wizardly Template",
    },
    {
      component: (
        <button
          onClick={() =>
            createNewDoc(
              "Resume Template",
              `
              [Name] 


              [Job History] 


              [Projects] 


              [Education] 

              
              [Skills]`
            )
          }
        >
          <div className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer border border-b-1 border-r-1">
            <div className="">
              {/* <Plus size={80} /> */}
              <Image src={plusImage} alt='' height={150} width={150}/>
            </div>
          </div>
        </button>
      ),
      footer: "Resume Template",
    },
  ];

  return (
    <div className="bg-[rgb(218,220,224,.8)] h-[300px] flex flex-row md:flex-col justify-center flex-wrap">
      <div className="flex flex-col space-y-4 w-10/12 mx-auto flex-wrap">
        <h3 className="text-muted-foreground text-sm">Start a new document</h3>
        <div className="flex space-x-4 flex-wrap">
          {TemplateMap.map((template) => (
            <div key={template.footer}>
              {template.component}
              <p className="text-sm mt-2 ml-2">{template.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};