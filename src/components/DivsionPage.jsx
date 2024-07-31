import { useQuery } from "react-query";
import { getSheet } from "../api-clients";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DivsionPage() {
  const { division } = useParams();

  const { data: sheet = [] } = useQuery({
    queryFn: () => getSheet(division),
    queryKey: division,
    onSuccess(data) {
      data = data.reverse();
      console.log(data);
    },
  });

  return (
    <div className="max-w-screen-lg m-auto flex flex-col gap-4 mt-4">
      {sheet.map((data) => (
        <Link
          to={`/${division}/${data.postID}`}
          className="flex flex-col bg-slate-700"
          key={division + "-image-" + data.postID}
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={data.image}
              alt={`${division}-image-${data.postID}`}
              className="object-cover"
            />
          </div>
          <div className="line-clamp-5 p-3 pb-0">
            <div className="text-2xl font-bold text-white">{data.heading}</div>
            <ReactMarkdown
              children={data.description}
              className={"prose prose-invert break-words overflow-y-clip"}
              remarkPlugins={[remarkGfm]}
            />
          </div>
          <div className="m-auto border my-2 w-32 text-center text-white rounded-lg">
            Read More
          </div>
        </Link>
      ))}
    </div>
  );
}
