import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="p-24">
      <h1>Next.js Auth Tutorial</h1>
    </main>
  );
}
