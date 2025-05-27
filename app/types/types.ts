export type FeatureType = {
  icon: string;
  title: string;
  text: string;
};

export type FeedbackType = {
  image: string;
  name: string;
  date: string;
  text: string;
  likes: string;
};

export type ItemCount = {
  bathrooms?: number;
  bedrooms?: number;
  beds?: number;
  adult?: number;
  child?: number;
  infant?: number;
  [key: string]: number | undefined;
}


export type Features = FeatureType[];
export type FeedbacksType = FeedbackType[];
