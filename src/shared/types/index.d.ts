export type Story = {
  id: number;
  title: string;
  description: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export type Article = {
  id: string;
  title: string;
  description: string;
  body: string;
  published: boolean;
};

export type Personal = {
  id: string;
  title: string;
  description: string;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}