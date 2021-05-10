import axios from "axios";
export const makeApiRequest = async function () {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const currentDate = [day, month, year].join("-");

  let chikkaballapur = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=291&date=${currentDate}`;
  let kolar = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=277&date=${currentDate}`;
  let bangaloreUrban = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=265&date=${currentDate}`;
  let bangaloreRural = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=276&date=${currentDate}`;
  let bbmp = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=294&date=${currentDate}`;

  const URLS = [chikkaballapur, kolar, bangaloreUrban, bangaloreRural, bbmp];
  const requests = URLS.map((url) => axios.get(url).catch((err) => null));

  return await axios.all(requests);
};
