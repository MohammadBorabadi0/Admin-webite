import AreaChartComponent from "./AreaChartComponent";
import PieChartComponent from "./PieChartComponent";

const Section2 = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-4 mx-2 sm:ml-0 rounded-lg">
      <section className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <PieChartComponent
          title="Total Order"
          startAngle={360}
          fill="#22c55e"
        />
        <PieChartComponent
          title="Total Revenue"
          startAngle={360}
          fill="#ea580c"
        />
      </section>
        <AreaChartComponent />
    </section>
  );
};

export default Section2;
