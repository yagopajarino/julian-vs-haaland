import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="p-3 bg-blue-500 text-slate-200 flex space-x-2 items-center justify-center">
      <h1>Fetching Goals</h1>
      <Spinner />
    </div>
  );
}
