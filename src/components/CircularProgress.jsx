import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const CircularProgress = ({ title, description, qty, value }) => {
  return (
    <div className="flex flex-1 h-52 justify-between items-center px-4 py-2 shadow-md rounded-xl bg-white">
      <div className="text-sm flex flex-col justify-between h-full py-4 font-semibold">
        <h4 className="font-extrabold text-lg">{title}</h4>
        <p className="text-slate-500">{description}</p>
        <span>{qty}</span>
      </div>
      <div
        style={{ width: 100, height: 150 }}
        className="flex justify-center items-center"
      >
        <CircularProgressbarWithChildren value={value}>
          <div style={{ marginTop: -5 }}>
            <strong className="text-2xl font-semibold">{value}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircularProgress;
