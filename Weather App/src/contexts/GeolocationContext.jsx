import { createContext, useContext, useState } from "react";

const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState(null);

  const updateGeolocation = (lat, lon, local_names) => {
    setGeolocation({ lat, lon, local_names });
  };

  return (
    <GeolocationContext.Provider value={{ geolocation, updateGeolocation }}>
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocation = () => {
  return useContext(GeolocationContext);
};
