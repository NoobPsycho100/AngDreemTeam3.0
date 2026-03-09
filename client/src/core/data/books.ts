export type GenreEnum = 'Фантастика' | 'Классика' | 'Детектив' | 'Триллер' | 'Комедия' | 'Трагедия';
export const AllGenres: GenreEnum[] = ['Фантастика', 'Классика', 'Детектив', 'Триллер', 'Комедия', 'Трагедия'];

export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    genres: GenreEnum[];
    rating: number;
    coverUrl?: string;
    isFavorite: boolean;
}