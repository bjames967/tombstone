export interface Season {
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  air_date: string;
  
  episodes: {
    id: number;
    air_date: string;
    epsiode_number: number;
    name: string;
    overview: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    crew: {
        id?: number;
        credit_id?: string;
        name?: string;
        department?: string;
        job?: string;
        gender?: number;
        profile_path?: string;
    }[];
    guest_stars: {
      id: number;
      name: string;
      department: string;
      job: string;
      gender: number;
      profile_path: string;
    }[];
 }[];
}
