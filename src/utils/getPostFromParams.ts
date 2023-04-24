import { allDocuments } from 'contentlayer/generated';

export const getPostFromParam = (param: string) => {
  return allDocuments.find((doc) => doc.slugAsParams === param);
};
