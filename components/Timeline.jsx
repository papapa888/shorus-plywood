import Container from "./Container";

const Timeline = () => {
  return (
    <Container>
    <div className=" mx-auto w-full h-full">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center my-10"> Where Quality Meets Consistency</h1>
      <div className="relative wrap  p-10 h-full ">
        <div className="hidden border-2 md:block  md:border-4 absolute rounded-full border-opacity-70  border-green-900 h-full md:-translate-x-[50%] md:left-[50%]"></div>

        <div className=" mb-8 flex md:justify-between   w-full  items-baseline">
          <div className="order-1 md:w-5/12 "></div>

          <div className="z-20  flex items-center order-1 bg-orange-400 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg md:flex-initial  flex-1 shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Raw Materials Inspection
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Ensure that the raw materials used in plywood production, such as
              logs and veneers, meet the specified quality standards.{" "}
            </p>
          </div>
        </div>

        <div className="mb-8 flex md:justify-between md:flex-row-reverse items-baseline w-full">
          <div className="order-1 md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-orange-400 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg md:flex-initial  flex-1 shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Moisture Control
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Maintain strict control over the moisture content of the veneers.
              Inconsistent moisture levels can lead to delamination and warping
              in the final product.{" "}
            </p>
          </div>
        </div>

        <div className="mb-8 flex md:justify-between items-baseline w-full ">
          <div className="order-1 md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-orange-400 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg md:flex-initial  flex-1 shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Core Layer Inspection
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Check the core layers of the plywood for alignment, consistency,
              and bonding quality.{" "}
            </p>
          </div>
        </div>

        <div className="mb-8 flex md:justify-between md:flex-row-reverse items-baseline w-full ">
          <div className="order-1 md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-orange-400 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg md:flex-initial  flex-1 shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">
              Thickness Measurement
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              {" "}
              Use calipers or electronic thickness gauges for accurate
              measurements.
            </p>
          </div>
        </div>

        <div className="mb-8 flex md:justify-between items-baseline w-full ">
          <div className="order-1 md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-orange-400 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg md:flex-initial  flex-1 shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Strength Testing
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Perform various strength tests on plywood samples, including
              bending tests and shear strength tests, to assess their structural
              integrity and compliance with strength standards.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Timeline;
