import axios from "axios";
const API_URL = "tps://cricket-live-line1.p.rapidapi.com";
const HEADERS = [
  "x-rapidapi-host: cricket-live-line1.p.rapidapi.com111111111111",
  "x-rapidapi-key: 0913deeaafmsh5553bca1b6b3ba5p1a94bdjsn4d6444e189ee",
];

export default hgetPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/336/PointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log("response data", response.data);

    return response.data.data.A.map((team) => ({
      team: team.team,
      played: team.P,
      won: team.W,
      lost: team.L,
      points: team.pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("There was error feteching the data");
    throw error;
  }
};
