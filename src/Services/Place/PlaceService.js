import axios from "axios";

const nearByPlaces = async (lat, lng) => {
  const stringLatLng = `${lat},${lng}`;
  const data = await axios.get(`/api/places/${stringLatLng}`);
  return data.data;
};

const detailPlace = async (hash_id) => {
  const data = await axios.get(`/api/detailplace/${hash_id}`);
  return data.data;
};

export const PlaceService = { nearByPlaces, detailPlace };
