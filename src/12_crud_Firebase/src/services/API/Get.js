import { baseUrlApi } from "./Config";

const GetAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`)
      .then((response) => response.json())
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

export default GetAPI;
