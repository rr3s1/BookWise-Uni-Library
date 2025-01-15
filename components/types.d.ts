interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    coverColor: string;
    coverUrl: string;
    videoUrl: string;
    summary: string;
    createdAt: Date | null;
  }