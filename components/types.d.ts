interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    available_copies: number;
    description: string;
    color: string;
    cover: string;
    video: string;
    summary: string;
    isLoanedBook?:boolean;
}