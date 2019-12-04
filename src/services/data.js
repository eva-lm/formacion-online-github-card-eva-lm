const url = "https://api.github.com/orgs/adalab/members?per_page=25";

const getDataFromServer = () => {
  return fetch(url).then(response => response.json());
};

export default getDataFromServer;
