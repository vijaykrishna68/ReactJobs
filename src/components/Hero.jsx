import React from 'react'

function Hero({Title,Subtitle}) {
    Title="Become a React Dev"
    Subtitle="Get a job that suits your skill set"
  return (
    <>
    {/* <!-- Hero --> */}
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {Title}
          </h1>
          <p className="my-4 text-xl text-white">
            {Subtitle}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero