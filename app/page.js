import Carousel from "@/components/Carousell";
import FilterSidebar from "@/components/FilterSidebar";
import ListingPage from "@/components/ListingPage";


export default function Home() {

  return (
    <div className="">
      <Carousel />
      <ListingPage />
      <FilterSidebar />
    </div>
  );
}
