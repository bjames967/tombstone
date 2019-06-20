export interface TVshow {
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    vote_count: number;
    vote_average: number;
    first_air_date: string
    backdrop_path: string;
   
    //detail
    created_by?: {
        id?: number;
        credit_id?: number;
        name?: string;
        gender?: number;
        profile_path?: string;
    }[];
    homepage?: string;
    last_episode_to_air?: {
        air_date?: string;
        episode_number?: 10;
        name?: string;
        season_number?: number;
        show_id?: number;
        still_path?: string;
    }[];
    networks: {
        name?: string;
        logos_path?: string;
    }[];
    number_of_epsiodes?: number;
    number_of_seasons?: number;
    production_compaines?: {
        id?: number;
        logo_path?: string;
        name?: string;
    }[];
    seasons?: {
        air_date?: string;
        epsiode_count?: number;
        name?: string;
        overview?: string;
        poster_path?: string;
        season_number?: number;
    }[];
    
}
    
    
    
