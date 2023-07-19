import ReviewComponent from "./ReviewComponent";
import TableComponent from "./TableComponent";

const Section3 = () => {
  return (
    <section className="flex flex-col lg:flex-row  mt-6">
      <div>
        <TableComponent />
      </div>
      <div>
        <ReviewComponent />
      </div>
    </section>
  );
};

export default Section3;
