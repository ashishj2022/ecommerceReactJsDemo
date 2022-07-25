import apiUrl from "./apiPath";

var helper = {
  get: async (path = '', token) => {
    const url = apiUrl.api_url+ path;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
    });
    return { response: await res, status: await res.status };
  },
};

export default helper;
