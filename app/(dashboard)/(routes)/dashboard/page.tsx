"use client";

import Leads from "@/components/leads-section";
import Listing from "@/components/listing-section";
import News from "@/components/news-section";
import Marketing from "@/components/marketing-section";

const DashboardPage = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-6 xl:grid-cols-5 mb-6">
      {/* leads section */}
      <Leads />

      {/* listings section */}
      <Listing />

      {/* updates & news section */}
      <News />

      {/* marketing section */}
      <Marketing /> 
    </main>
  );
};

export default DashboardPage;
