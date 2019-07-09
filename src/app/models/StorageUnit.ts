export interface StorageUnit {
    title: string;
    poster_path: string;
    id: number;
    overview: string;
    avg_rating: number;
    genre_ids: {
      id:number;
      name: string;
    }[];
    backdrop_path: string;
    release_date: string;
    user_rating: number;
  }
