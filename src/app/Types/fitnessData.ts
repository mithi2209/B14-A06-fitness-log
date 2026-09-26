export interface IExerciseLibraryDataTypes {
  id: number ;
  name: string ;
  image: string ;
  muscleGroups: string[] ;
  equipment: string ;
  difficulty: string ;
  duration: number ;
  caloriesBurned: number ;
  sets: number ;
  reps: string ;
  rating: number ;
  description: string ;
  instructions: string[]
};


export type PlanTab = "today" | "saved";

export type SortOption =
  | "duration"
  | "rating"
  | "caloriesBurned";

