export interface IProject {
  id: number;
  name: string;
  img: string;
  alt: string;
  linkCode: string;
  technologies: string[];
}

export interface IStoreProject {
  projects: IProject[]
}