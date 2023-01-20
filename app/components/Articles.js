import Link from 'next/link';

export default function Articles() {

    return (
        <>
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Articles</h3>
      <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
          <img
              
              alt=""
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e6/90/42/caption.jpg?w=1200&h=-1&s=1"
            />

          </div>
          <div className="flex-grow ml-4">
            <Link href="https://www.tripadvisor.com/Articles-ldXNMCW8X0p8-Pacific_palisades_weekend_guide.html" className="text-md">Weekend in the Pacific Palisades: Cool culture and cooler nature</Link>
          </div>
          </div>

          <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
          <img
              
              alt=""
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e6/98/9d/caption.jpg?w=800&h=-1&s=1&cx=1100&cy=720&chk=v1_8d875b16e93773b72e2c"
            />

          </div>
          <div className="flex-grow ml-4">
            <Link href="https://www.tripadvisor.com/Articles-lLk1rMULy3pE-2_days_in_london_itinerary.html" className="text-md">The Perfect 2 Days in London</Link>
          </div>
          </div>

          <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
          <img
              
              alt=""
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/cc/fe/d4/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_e7d5e36a8523c307c6a7"
            />

          </div>
          <div className="flex-grow ml-4">
            <Link href="https://www.tripadvisor.com/Articles-leHI6SbW41X4-2023_bucket_list_trips.html" className="text-md">6 seemingly impossible trips to (actually!) take in 2023</Link>
          </div>
          </div>
      </div>

        </>
    )

}