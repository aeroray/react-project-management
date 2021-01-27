export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  token: string;
  organization: string;
}

export interface Project {
  id: string;
  pin: boolean;
  name: string;
  userId: string;
  organization: string;
}
