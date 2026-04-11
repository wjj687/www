export type AppreciationSource = {
  author: string;
  work: string;
  publisher?: string;
  year?: string;
  pages?: string;
  url?: string;
};

export type AppreciationSection = {
  title: string;
  paragraphs: string[];
};

export type PoemAppreciationEntry = {
  id: string;
  poemId: string;
  title: string;
  subtitle: string;
  summary: string;
  labels: string[];
  source: AppreciationSource;
  sections: AppreciationSection[];
};
