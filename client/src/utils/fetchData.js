export const exerciseOptions = {
  method: "GET",
  contentType: "application/json",
};

export const youtubeOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': "dab51e118emsh89664abd1790a0ep15ea95jsn6676024ec5f6",
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
