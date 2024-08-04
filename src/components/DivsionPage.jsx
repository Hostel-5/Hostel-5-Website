import { useQuery } from "react-query";
import { getSheet } from "../api-clients";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LoadingAnimation } from "./Loading";

export default function DivsionPage() {
  const { division } = useParams();

  const {
    data: sheet = [],
    isLoading,
    isLoadingError,
  } = useQuery({
    queryFn: () => getSheet(division),
    queryKey: division,
    onSuccess(data) {
      data = data.reverse();
      console.log(data);
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
    <div className="max-w-screen-lg m-auto grid grid-cols-1 justify-items-center flex-wrap gap-4 mt-4 ">
      {sheet.map((data) => (
        <Link
          to={`/${division}/${data.postID}`}
          className="flex flex-col sm:grid sm:grid-cols-3 sm:aspect-[3] sm:overflow-hidden bg-slate-700 max-w-full relative"
          key={division + "-image-" + data.postID}
        >
          <div className="w-full aspect-w-4 aspect-h-3 aspect-square relative overflow-hidden">
            <img
              src={data.image}
              alt={`${division}-image-${data.postID}`}
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-full min-w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="line-clamp- p-3 pb-0">
              <div className="text-2xl font-bold text-white">
                {data.heading}
              </div>
              <ReactMarkdown
                children={data.description}
                className={
                  "prose prose-invert line-clamp-4 sm:line-clamp-none !max-w-none break-words overflow-y-clip"
                }
                remarkPlugins={[remarkGfm]}
              />
            </div>
            <div className="sm:absolute sm:bottom-0 sm:left-2/3 sm:-translate-x-1/2 sm:z-20 m-auto border my-2 w-32 text-center text-white rounded-lg bg-slate-800">
              Read More
            </div>
            <div
              style={{
                mask: "linear-gradient(transparent, black)",
              }}
              className="hidden sm:block w-2/3 absolute bottom-0 right-0 h-20 bg-slate-900 backdrop-blur-sm z-10"
            ></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
