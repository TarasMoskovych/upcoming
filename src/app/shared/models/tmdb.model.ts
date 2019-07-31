interface IMovie {
  adult?: boolean;
  backdrop_path?: string | null;
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string | null;
  popularity?: number;
  title?: string;
  vote_average?: number;
  vote_count?: number;
  video?: boolean;
}

export interface Movies {
  page?: number;
  results?: Movie[];
  total_results?: number;
  total_pages?: number;
}

export interface Movie extends IMovie {
  release_date?: string;
  genre_ids?: number[];
}

export interface MovieDetails extends IMovie {
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  imdb_id?: string | null;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string | null;
}

export interface Genres {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  checked?: boolean;
}

export interface ProductionCompany {
  name?: string;
  id?: number;
  logo_path?: string | null;
  origin_country?: string;
}

export interface ProductionCountry {
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
}

export interface SpokenLanguage {
  iso_639_1?: string;
  name?: string;
}
