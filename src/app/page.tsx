import NavBar from "@/components/NavBar";
// import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/document');
  return (
    <>
      {/* <NavBar /> */}
    </>
  );
}
