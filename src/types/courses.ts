export interface Course {
  offerings: any[];
  max_units: number;
  repeatable: boolean;
  seasons_offered: any[];
  id: string;
  description: string;
  min_units: number;
  title: string;
  average_hours_spent: string;
  grading: string;
  course_id: string;
  similar_courses: SimilarCourses;
  general_requirements: any[];
  course_codes: string[];
  ratings: Rating[];
}

export interface SimilarCourses {
  taken_after: any[];
  taken_before: any[];
  taken_concurrently: any[];
  similar_descriptions: any[];
}

export interface Rating {
  instructor_name: string;
  term: Term;
  average_rating: string;
  num_ratings: number;
}

export interface Term {
  season: string;
  stanford_term_id: number;
  previous_term?: number;
  end_year: number;
  next_term: number;
  id: string;
  start_year: number;
}
