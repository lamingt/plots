import { Suspense } from "react";
import HomeChart from "../components/HomeChart";

function Home() {
  return (
    <div className="min-h-[95vh]">
      <div className="flex flex-col gap-[100px]">
        <div className="ml-[10vw] xl:ml-[15vw] mt-[10vh]">
          <p
            className="text-[1.73rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[5rem] leading-tight
                        w-[320px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px]"
          >
            The best plots you'll see in your lifetime
          </p>
          <p className="text-xl mt-8 text-gray-400 w-[320px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px]">
            Inspired by my very fun COMP3411 assignment
          </p>
        </div>
        <div className="sm:w-[500px] h-[500px] ml-[15vw] lg:ml-[30vw] 2xl:ml-[60vw]">
          <Suspense key={location.pathname} fallback={<div>Loading...</div>}>
            <HomeChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Home;
