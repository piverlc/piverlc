import { allDocuments } from 'contentlayer/generated';

export const getPostFromParam = (param: string) => {
  const doc = allDocuments.find((doc) => doc.slugAsParams === param);

  if (!doc) {
    return null;
  }

  return doc;
};
