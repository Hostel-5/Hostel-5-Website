export const LoadingAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
      <div className="flex space-x-2 justify-center items-center">
        <div className="h-5 aspect-1 aspect-square bg-white rounded-full animate-custom-bounce [animation-delay:-0.3s]"></div>
        <div className="h-5 aspect-1 aspect-square bg-white rounded-full animate-custom-bounce [animation-delay:-0.15s]"></div>
        <div className="h-5 aspect-1 aspect-square bg-white rounded-full animate-custom-bounce"></div>
      </div>
      <span className="text-white font-bold text-xl">Loading</span>
    </div>
  );
};

export default function BounceLoading() {
  return (
    <div className="flex justify-center items-center min-h-[24px] gap-[0.125rem]">
      <div className="h-2 w-2 bg-white rounded-full animate-custom-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-custom-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-custom-bounce"></div>
    </div>
  );
}
