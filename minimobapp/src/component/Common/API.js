// GET Method call
export const get = async apiURL => {
  return fetch(apiURL)
    .then(response => response.json())
    .then(json => {
      return json.data;
    })
    .catch(error => {
      throw error;
    });
};
