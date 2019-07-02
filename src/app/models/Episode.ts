export interface Episode {
  air_date: string;
  crew: {
    id: number;
    credit_id: string;
    name: string;
    department: string;
    job: string;
    gender: number;
    profile_path: string;
  }[];
  
  episode_number: number;
  guest_stars: {
    id: number;
    name: string;
    credit_id: string;
    character: string;
    order: number;
    gender: number;
    profile_path: string;
  }[];
  
  name: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
