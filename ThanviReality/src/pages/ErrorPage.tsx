const ErrorPage = () => {
  return <div className="flex flex-col items-center justify-center h-screen gap-4">
    <h1 className="text-4xl font-bold dark:text-white">Some <mark>technical glitch</mark> has occured.</h1>
    <a href="@" className="text-blue-500 underline">Please contact the developer</a>
  </div>;
};

export default ErrorPage;
