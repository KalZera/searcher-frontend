import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { ListAddress, DetailsAddress } from "../../Components";

import { PlaceService } from "../../Services";

import "./MainPage.css";

export const MainPage = () => {
  const [address, setAddress] = useState("");
  const [latlng, setLatlng] = useState({});
  const [restaurants, setRestaurants] = useState({});
  const [restaurantSelect, setSelectRestaurant] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (address) => {
    setAddress(address);
    setRestaurants({});
  };
  const handleSelect = async (address) => {
    const codeAddress = await geocodeByAddress(address);
    const latlng = await getLatLng(codeAddress[0]);
    setLatlng(latlng);
  };
  const searchPlaces = async () => {
    try {
      const restaurants = await PlaceService.nearByPlaces(
        latlng.lat,
        latlng.lng
      );
      setRestaurants(restaurants);
      setAddress("");
      setLatlng({});
    } catch (error) {
      setRestaurants({});
    }
  };

  const openDetails = (restaurant) => {
    setSelectRestaurant(restaurant);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectRestaurant("");
  };

  return (
    <>
      <div className="content">
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => {
            return (
              <>
                <div className="box">
                  <div className="input-box">
                    <input
                      {...getInputProps()}
                      placeholder="Deseja Procurar um restaurante"
                    />
                    <div className="dropdown-container">
                      {loading && <div className="sugestion">Loading...</div>}
                      {suggestions.map((suggestion) => (
                        <div
                          {...getSuggestionItemProps(suggestion)}
                          className="sugestion"
                        >
                          <span
                            onClick={() => {
                              handleSelect(suggestion.description);
                              handleChange(suggestion.description);
                            }}
                          >
                            {suggestion.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={searchPlaces}>Pesquisar</button>
                </div>
              </>
            );
          }}
        </PlacesAutocomplete>
        {showDetails ? (
          <DetailsAddress
            restaurantSelect={restaurantSelect}
            closeDetails={closeDetails}
          />
        ) : (
          restaurants.length > 0 && (
            <>
              <ListAddress
                restaurants={restaurants}
                setRestaurant={openDetails}
              />
            </>
          )
        )}
      </div>
    </>
  );
};
