import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-full h-full flex  flex-col justify-center items-center">
      <h1 className="text-red-900 text-2xl ">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-red-400 text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
