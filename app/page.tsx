import { AdmissionList } from "@/components/admission-list";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-screen bg-slate-800">
      <h1 className="text-3xl text-white">Hello World</h1>
      <Button>Hello</Button>
      <Suspense fallback={<>Loading......</>}>
        <AdmissionList />
      </Suspense>
    </main>
  );
}
