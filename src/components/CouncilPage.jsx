import { useQuery } from "react-query";
import { getCouncilSheet } from "../api-clients";
import { LoadingAnimation } from "./Loading";

export default function CouncilPage() {
  const {
    data: data = {},
    isLoading,
    isLoadingError,
  } = useQuery({
    queryFn: getCouncilSheet,
    queryKey: "councilPage",
    onSuccess(data) {
      console.log(data);
    },
  });

  const sequence = [
    ["General Secretary", "Warden Norm"],
    ["Cultural Councellor", "Cultural Nominee"],
    ["Sports Councellor", "Sports Nominee"],
    ["Tech Councellor"],
    ["Mess Councellor"],
    ["Maint Councellor"],
    ["System Administrator"],
  ];

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

  return <div></div>;
}
