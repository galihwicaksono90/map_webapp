import { useEffect } from "react";

const useLoadLocation = (locationDispatch, location, setIsLoading) => {
  useEffect(() => {
    const loadLocation = async () => {
      const res = await import(`../store/${location}Store.js`);
      const data = res.default;
      locationDispatch({ type: "changeCurrentLocation", payload: data });
      setTimeout(function () {
        setIsLoading(false);
      }, 700);
    };

    if (location !== "") loadLocation();

    return locationDispatch({ type: "changeCurrentLocation", payload: {} });
  }, [location, locationDispatch, setIsLoading]);
};

export default useLoadLocation;
