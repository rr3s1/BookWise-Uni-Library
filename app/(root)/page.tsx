import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";


const Home = () => 
  (
    <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
    title = "Latest Books"
    books={sampleBooks}
    containerClassBane="mt-22"
    />
    </>
  );


export default Home;
