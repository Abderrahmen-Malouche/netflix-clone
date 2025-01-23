const token = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const getTrendingSeries = async () => {
  const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching trending series:", err.message);
  }
};
export const getSeriesDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching series details:", error.message);
  }
};
export const getPopularSeries = async () => {
  const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching popular series:", err.message);
  }
};

export const getSeriesTrailer = async (id) => {
  const url =
    `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${token}`,
    },
  };
  try{
    const response = await fetch(url, options);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data
    }
  catch(error){
    console.error("Error fetching trailer:", error.message);
  }
};