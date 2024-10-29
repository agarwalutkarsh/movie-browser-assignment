import Carousel from "@/components/Carousell";
import ListingPage from "@/components/ListingPage";


export default function Home() {
  const movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5']
  return (
    <div className="">
      <Carousel items={movies} />
      <ListingPage />
    </div>
  );
}
