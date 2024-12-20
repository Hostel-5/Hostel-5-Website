import { useQuery } from "react-query";
import { getMessSheet } from "../api-clients";
import { LoadingAnimation } from "./Loading";

export default function MessPage() {
  const {
    data: data = {},
    isLoading,
    isLoadingError,
  } = useQuery({
    queryFn: () => getMessSheet(),
    queryKey: "mess-page",
    select: (data) => {
      console.log(data);
      const newData = {};

      const days = Object.keys(data[0]);
      const dayToday = days.indexOf(
        new Date(Date.now())
          .toLocaleDateString("en-US", { weekday: "long" })
          .toUpperCase()
      );
      days.forEach(
        (_, index) => (newData[days[(index + dayToday) % days.length]] = {})
      );

      let currentMeal = "null";
      Object.keys(data).forEach((key) => {
        if (key == 0) return;
        if (data[key]["__EMPTY"]) currentMeal = data[key]["__EMPTY"];
        days.forEach((day) => {
          if (newData[day][currentMeal] == undefined) {
            newData[day][currentMeal] = [];
          }
          if (data[key][day]) newData[day][currentMeal].push(data[key][day]);
        });
      });

      return newData;
    },
    onSuccess(data) {
      console.log(data);
      console.log(Object.keys(data));
    },
  });

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isLoadingError) {
    return (
      <div className="text-white text-lg font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Some Error Occured
      </div>
    );
  }

  return (
    <div className="prose prose-invert !max-w-none prose-headings:my-0 prose-hr:my-2 m-auto sm:flex sm:flex-wrap sm:justify-center">
      {Object.keys(data).map((day) => (
        <div key={day} className="my-3 sm:w-72 sm:max-w-sm">
          <h3 className="border w-fit px-3 py-1 rounded-lg mx-auto sm:mb-1">
            {day}
          </h3>
          {Object.keys(data[day]).map((mealTime) => (
            <div key={mealTime}>
              <h4 className="underline underline-offset-4 !mb-1 sm:text-center">
                {mealTime}
              </h4>
              {data[day][mealTime].map((meal, index) => (
                <div className="ml-3 text-lg sm:text-center" key={index}>
                  {meal}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
