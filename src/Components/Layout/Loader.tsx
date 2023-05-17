import { FC } from "react";

const Loader: FC = (): JSX.Element => {
  return (
    <div className="relative w-full flex h-16 justify-center mt-4">
      <div className="absolute top-0">
        <svg
          className="animate-spin h-12 w-12 rounded-full bg-transparent border-4 border-secondary"
          style={{ borderRight: "white", borderTop: "white" }}
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
  );
};

export default Loader;
