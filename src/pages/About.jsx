import React from "react";

function About() {
  return (
    <div className="w-full ">
      <div className="relative">
        <img
          src="https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/who-we-are/our-history/history-foreground-final.jpg"
          alt=""
          className="w-full h-96"
        />
        <div className="w-full h-full absolute  top-0 z-30 bg-red-700 opacity-80"></div>
        <div className="flex flex-row absolute left-16 top-20 z-40 ">
          <div className="relative  h-[400px] w-96 md:flex justify-center hidden ">
            <img
              src="https://tayloronhistory.com/wp-content/uploads/2015/05/december-30-1913-f1231_it20361-1913.jpg"
              className="bg-white  w-80 h-[400px] "
            />
          </div>

          <div className="ml-10 h-[350px] flex flex-col justify-center ">
            <h1 className="text-5xl font-extralight text-gray-100">
              About Our Firm
            </h1>
            <span className="border border-white  mt-5 mb-3 w-20 "></span>
            <h6 className="text-lg font-light  text-white ">
              Bank Mega is one of the world's best-known financial institute
            </h6>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="mt-32 w-full">
        {/* first content */}
        <div className="w-1/2 m-auto my-10">
          <h1 className="text-center text-2xl font-[100] text-gray-900 ">
            The Bank Mega, Inc. is a leading global financial institution that
            delivers a broad range of financial services across investment
            banking, securities, investment management and consumer banking to a
            large and diversified client base that includes corporations,
            financial institutions, governments and individuals.
            <h2 className="mt-5 text-xl">
              Founded in 1869, the firm is headquartered in New York and
              maintains offices in all major financial centers around the world.
            </h2>
          </h1>
        </div>
        {/* second content */}
        <div className="w-1/2 m-auto my-10 flex items-center flex-col">
          <h1 className="text-center font-extralight text-2xl my-5">
            Our Purpose and Values
          </h1>

          <h6 className="text-center font-extralight text-lg my-5">
            We aspire to be the world’s most exceptional financial institution,
            united by our shared values of client service, excellence,
            partnership, and integrity.
          </h6>

          <h6 className="text-center font-extralight text-lg">
            Drawing on over 150 years of experience working with the world’s
            leading businesses, entrepreneurs, and institutions, we mobilize our
            people, culture, technologies, and ideas to advance the success of
            our clients, broaden individual prosperity, and accelerate economic
            progress for all.
          </h6>

          <button className=" my-5 cursor-pointer text-sm text-blue-500 hover:underline py-1">
            Learn More
          </button>
        </div>
        {/* third content */}
        <div className="flex justify-center items-center">
          <img
            src="https://www.goldmansachs.com/about-us/multimedia/our-people-and-leadership.jpg"
            className="w-2/4 h-[450px] object-cover rounded-full shadow-lg shadow-gray-500"
          />
          <div className="w-1/4 ml-5">
            <h1 className="text-center font-extralight text-2xl my-5  ">
              People and Leadership
            </h1>
            <h1 className="text-center font-extralight text-lg my-5">
              Our people are our greatest asset – we say it often and with good
              reason. It is only with the determination and dedication of our
              people that we can serve our clients, generate long-term value for
              our shareholders and contribute to the broader public.
            </h1>
          </div>
        </div>

        {/* fourth content */}
        <div className="flex justify-center items-center my-10">
          <div className="w-1/4 mr-5">
            <h1 className="text-center font-extralight text-2xl my-5  ">
              Culture of Client Service
            </h1>
            <h1 className="text-center font-extralight text-lg my-5">
              For more than 150 years, a culture of teamwork and client service
              has defined our firm. Today, nearly 40,000 Goldman Sachs
              colleagues work together to serve our clients and communities
              around the world, building upon a rich history of innovative ideas
              from extraordinary people.
            </h1>
          </div>

          <img
            src="https://www.goldmansachs.com/about-us/multimedia/client-service.jpg"
            className="w-2/4 h-[450px] object-cover rounded-full shadow-lg shadow-gray-500"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
