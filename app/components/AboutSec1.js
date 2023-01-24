export default function AboutSec1() {
  const bg = {
    backgroundImage: "url('/assets/wcb.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
  };

  return (
    <>
      <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
          {/* <h1 className="font-bold text-4xl pd-12 text-center mb-5">
            About HM Tour
          </h1> */}

          {Slide()}
        </div>
      </section>

      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-3xl py-12 text-center mb-5">
          Meet the feature of our App
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div className="item">
            <div className="images">
              <img
                src={"https://www.gonomad.com/wp-content/uploads/2019/12/digital-nomad.jpg"}
                width={500}
                height={350}
                className="shadow-lg rounded-lg"
              />
            </div>
            <div className="info flex justify-center flex-col">
              <div className="title">
                <h1 className="font-bold text-ml md:text-xl text-center mt-5 mb-3">
                CONNECTION
                </h1>
              </div>
              <p className="text-gray-500 text-center py-3 mx-5">
              HM Tour community provides a place for community tourism all around the world to connect and share their stories and experiences.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="images">
              <img
                src={"/assets/travelEx.jpg"}
                width={500}
                height={350}
                className="shadow-lg rounded-lg"
              />
            </div>
            <div className="info flex justify-center flex-col">
              <div className="title">
                <h1 className="font-bold text-ml md:text-xl text-center mt-5 mb-3">
                Experiences Exchange 
                </h1>
              </div>
              <p className="text-gray-500 text-center py-3 mx-5">
                the world's largest travel guidance platform*, helps hundreds of
                millions of people each month become better travelers.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="images">
              <img
                src={"/assets/travelAd1.PNG"}
                width={500}
                height={350}
                className="shadow-lg rounded-lg"
              />
            </div>
            <div className="info flex justify-center flex-col">
              <div className="title">
                <h1 className="font-bold text-ml md:text-xl text-center mt-5 mb-3">
                Tavel Guidance
                </h1>
              </div>
              <p className="text-gray-500 text-center py-3 mx-5">
              we offer advice on a variety of travel-related topics. This includes publishing official travel advisories and advice to help you avoid problems while overseas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 ml-8">
          <div className="col-span-1 lg:col-start-2 lg:col-span-3 ml-8">
          <section>
        <video
        src={"/assets/video.mp4"}
        controls
        className="ml-8">
            
        </video>
      </section>
          </div>
        </div>
      </div> */}

      
      
    </>
  );
}
//npm install swiper --force

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
      <video
        src={"/assets/videologo.mp4"}
        controls
        className="mr-8">
            
        </video>
        {/* <img
          src={"/assets/togetherInTravel.jpg"}
          width={600}
          height={600}
          className="shadow-lg rounded-lg"
        /> */}
      </div>

      <div className="info flex justify-center flex-col">
        <div className="title">
          <h1 className="font-bold text-ml md:text-3xl ml-10 mt-5 mb-10">
            About HM Tour
          </h1>
        </div>
        <p className="text-gray-500 py-3 mx-10">
        A collaborative community tourism network that supports people who love to travel and aims to exchange tourists' experiences during travel, evaluate their trip, and discover where tourists stay and where they eat to make planning easy for tourists.
        </p>
      </div>
    </div>
  );
}
