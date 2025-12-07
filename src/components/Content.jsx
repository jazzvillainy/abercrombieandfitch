import ImageBlock from "./photoblock/ImageBlock";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Content({ eachItem, setShowPreview, IsLoading, error, status }) {
  console.log(eachItem);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function getTimeLeft() {
      const now = new Date();
      const year =
        now.getFullYear() +
        (now.getMonth() === 11 && now.getDate() > 31 ? 1 : 1);
      const target = new Date(`January 1, ${year} 00:00:00`);
      const diff = target - now;

      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (error) {
    return (
      <section className="bg-stone-100 border-b-8 text-center flex flex-col justify-center items-center min-h-[60vh] p-6">
        <button
          className="rounded-md px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </section>
    );
  }

  if (IsLoading) return <CircularProgress />;

  const count = eachItem?.length ?? 0;

  return (
    <section className="w-full bg-slate-500 flex flex-col items-center ">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="w-full px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg md:text-xl font-semibold tracking-widest uppercase">
              DECEMBER STOCK
            </h2>
            <span className="text-sm text-slate-600">{count} items</span>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-slate-50 px-3 py-1 rounded-md text-sm font-medium">
              <span className="text-slate-700">New Year in</span>
              <span className="font-mono text-sm">
                {String(timeLeft.days).padStart(2, "0")}d :{" "}
                {String(timeLeft.hours).padStart(2, "0")}h :{" "}
                {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <button className="hidden md:inline-block bg-black text-white text-sm px-3 py-1 rounded-md">
              Shop All
            </button>
          </div>
        </div>
      </header>

      <div className=" px-4 py-8 flex items-center w-fit ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {eachItem.map((el) => {
            return (
              <ImageBlock
                status={status}
                setShowPreview={setShowPreview}
                key={el.id}
                el={el}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

Content.propTypes = {
  eachItem: PropTypes.array.isRequired,
  setShowPreview: PropTypes.func.isRequired,
  IsLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  status: PropTypes.string,
};

export default Content;
