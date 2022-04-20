export interface Post {
  id: number;
  author: string;
  title: string;
  text: string;
  url: string;
  comments: Comment[];
}

export interface Feedback {
  id: number;
  likes: number;
  dislikes: number;
}

export interface Comment {
  id: number;
  text: string;
}

export interface AuthToken {
  token: string;
}
