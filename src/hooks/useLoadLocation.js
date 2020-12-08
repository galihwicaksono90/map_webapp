import { useEffect } from "react";

const useLoadLocation = (locationDispatch, location, setIsLoading) => {
  const loadDelay = 0;
  useEffect(() => {
    const loadLocation = async () => {
      const res = await import(`../store/${location}Store.js`);
      const data = res.default;
      locationDispatch({ type: "changeCurrentLocation", payload: data });
      setTimeout(function () {
        setIsLoading(false);
      }, loadDelay);
    };

    if (location !== "") loadLocation();

    return locationDispatch({ type: "changeCurrentLocation", payload: {} });
  }, [location, locationDispatch, setIsLoading]);
};

export default useLoadLocation;
