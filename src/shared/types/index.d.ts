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
  address: {
    city: string;
  };
};

export type Article = {
  id: string;
  title: string;
  description: string;
  body: string;
  published: boolean;
  createdAt: string;
};

export type Personal = {
  id: number;
  title: string;
  description: string;
  body: string;
  createdAt: Date;
};
