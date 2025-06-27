import { redirect } from "next/navigation";

export default function Page() {
  redirect("/learn-more.pdf");
  return null;
} 