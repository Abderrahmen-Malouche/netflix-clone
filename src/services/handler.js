export default async function handler(req, res) {
    const { endpoint, id } = req.query;
    const token = process.env.VITE_API_READ_ACCESS_TOKEN;
  
    let url;
    switch (endpoint) {
      case "trending":
        url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
        break;
      case "details":
        url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        break;
      case "popular":
        url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        break;
      case "trailer":
        url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
        break;
      default:
        return res.status(400).json({ error: "Invalid endpoint" });
    }
  
    try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      
        console.log(`URL: ${url}`);
        console.log(`Response status: ${response.status}`);
        console.log(`Response body:`, await response.text());
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error("Error in serverless function:", error.message);
        res.status(500).json({ error: error.message });
      }
  }
  