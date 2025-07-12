import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";
import { auth } from "@/auth";
import { desc } from "drizzle-orm";

const Home = async () => {
    const session = await auth();

    const latestBooks = (await db
        .select()
        .from(books)
        .limit(10)
        .orderBy(desc(books.createdAt))) as Bonok[];

    return (
        <>
            <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />

            <BookList
                title="Latest Books"
                books={latestBooks.slice(1)}
                containerClassName="mt-28"
            />
        </>
    );
};

export default Home;
