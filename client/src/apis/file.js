import config from "../config";
import axios from 'axios'

const fileUpload = async (file) => {
  let formData = new FormData()
  formData.append('file', file)
  const res = await axios.post(`${config.server_url}api/file`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return Promise.resolve(res)
};
export { fileUpload };
