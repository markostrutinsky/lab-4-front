export interface MovieSearch {
    firstName: string;
    lastName: string;
}

export interface Director {
    id: number;
    firstName: string;
    lastName: string;
    biography: string;
    birthDate: Date;
    movies: Movie[];
}

export interface Movie {
    id: number;
    title: string;
    genre: string;
    releaseDate: Date;
    duration: number;
    director: Director;
}