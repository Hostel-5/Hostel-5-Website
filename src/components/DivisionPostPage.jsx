import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSheet } from "../api-clients";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DivisionPostPage() {
  const { division, postID } = useParams();

  const { data: data = [] } = useQuery({
    queryFn: () => getSheet(division),
    queryKey: division + "-image-" + postID,
    select: (data) => data.find((data) => String(data.postID) == postID),
  });

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
