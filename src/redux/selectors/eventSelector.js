import { useSelector } from "react-redux";

export const useEvent = (id) => {
  return useSelector(({ events }) =>
    events.value.find((item) => item.id === id)
  );
};
