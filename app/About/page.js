export default function About() {
  return (
    <>
      <h1>About</h1>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://cdn.pixabay.com/photo/2020/02/20/06/24/team-4864038_960_720.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              ></img>
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                About our team
              </h2>
              <p class="mt-6 text-gray-600">
                We are a group of dedicated individuals who are passionate about
                what we do. We strive to deliver top-quality results and exceed
                our client's expectations every time. Our team is comprised of
                experts in various fields, including software development,
                design, and project management.
              </p>
              <br></br>
              <h4 class="text-2xl text-gray-900 font-bold md:text-2xl">
                {" "}
                Our Mission
              </h4>
              <p class="mt-6 text-gray-600">
                Our mission is to provide accurate and unbiased information to
                help travelers make informed decisions when choosing tours. We
                believe that every traveler's experience should be unique and
                special, and we are dedicated to helping them find the perfect
                tour for their individual needs and preferences. We strive to
                make it easy for travelers to find and compare tours based on
                their preferences and budget. Our goal is to be the most
                reliable and trusted source for tour ratings and reviews on the
                internet, and we are committed to providing a valuable service
                to both travelers and tour providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
