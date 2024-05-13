import { upload } from './upload'

export const uploadFiles = async ({files, uri}) => {
  const uploaded = [];
  const errors = [];
  const newFiles = files.filter(
    p => p.rawFile instanceof File
  );
  // const formerFiles = files.filter(
  //   p => !(p.rawFile instanceof File)
  // );
  
  try {
    for (let i=0; i<newFiles.length; i++) {
      const file = newFiles[i].rawFile;
      uploaded.push(await upload({file, uri}));
    }
  } catch (error) {
    errors.push(error)
    return false;
  }

  return { uploaded, errors };
}