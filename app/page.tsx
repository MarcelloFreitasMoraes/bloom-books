import { redirect } from "next/navigation";

export default function Home() {
  redirect("/gender?page=1&limit=5&list=true&grid=false");
  return null
}
