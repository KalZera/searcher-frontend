import React, { useState, useEffect } from "react";

import { PlaceService } from "../../Services";

export const DetailsAddress = ({ restaurantSelect, closeDeatils }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    PlaceService.detailPlace(restaurantSelect).then((res) => {
      setDetails(res);
    });
  }, []);
  return (
    <>
      <div className="card box-place">
        <a href="_" onClick={closeDeatils}>
          Fechar
        </a>
        <div className="info title-name">{details.name}</div>
        <div className="info">
          <span>Endereço</span>: {details.formatted_address}
        </div>
        <div className="info">
          <span>Telefone: </span>: {details.formatted_phone_number}
        </div>
        <div className="info">
          <span>Avaliação Geral</span>: {details.rating}
        </div>
        <div className="info">
          <a href={details.url}>Acessar no mapa</a>
        </div>
      </div>
    </>
  );
};
