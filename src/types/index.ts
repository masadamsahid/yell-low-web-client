export type User = {
  id: number;
  username: string;
  email: string;
  fullName: string;
  createdAt: Date;
  description?: string;
  profileImg?: string;
  title?: string;
}

enum PostType {
  yell=1,
  comment
}

export type Post = {
  id: number;
  type: PostType;
  ownerId: number;
  likes?: number[];
  comments?: Post[];
  image?: string;
}