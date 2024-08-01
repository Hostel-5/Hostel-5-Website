import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSheet } from "../api-clients";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LoadingAnimation } from "./Loading";

export default function DivisionPostPage() {
  const { division, postID } = useParams();

  const {
    data: data = [],
    isLoading,
    isLoadingError,
  } = useQuery({
    queryFn: () => getSheet(division),
    queryKey: division + "-image-" + postID,
    select: (data) => data.find((data) => String(data.postID) == postID),
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
    <div
      className="flex flex-col bg-slate-700 my-3"
      key={division + "-image-" + data.postID}
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={data.image}
          alt={`${division}-image-${data.postID}`}
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <div className="text-2xl font-bold text-white">{data.heading}</div>
        <ReactMarkdown
          children={data.description}
          className={"prose prose-invert break-words"}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
}
