import type { Metadata } from "next";
import CreatorPage from "@/components/creators/CreatorPage";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "For Creators",
  description:
    "Get paid to make content you'd make anyway. Apply to the Viral Slice Co. creator network — real budgets, real briefs, real payment terms.",
};

export default function Page() {
  return (
    <>
      <Header />
      <CreatorPage />
      <Footer />
    </>
  );
}
