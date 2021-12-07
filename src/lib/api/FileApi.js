import {BASE_URL, PARSE_REST_KEY} from '../../keys';
//import Parse from 'parse/react-native.js';

const uploadFile = async (name, base64, mimeType) => {
  const file = new File(name, {base64: base64}, mimeType);
  try {
    await file.save();
    return file;
  } catch (err) {
    return {error: err};
  }
};

export const FileApi = {
  uploadFile: uploadFile,
};
