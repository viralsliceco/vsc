import type { Metadata } from "next";
import BrandsPage from "@/components/brands/BrandsPage";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "For Brands",
  description:
    "Built for brands that want to win attention. Viral Slice Co. is the creative + distribution partner for brands ready to scale content beyond posting and praying.",
};

export default function Page() {
  return (
    <>
      <Header />
      <BrandsPage />
      <Footer />
    </>
  );
}
