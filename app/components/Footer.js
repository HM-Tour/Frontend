
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';


export default function Footer() {

    const bg = {
        backgroundImage : "url('https://www.nicepng.com/png/detail/762-7625697_hotel-footer-travel-footer.png')",
        backgroundRepeat : 'no-repeat',
        backgroundPosition : "bottom right"

    }


    return (
        <footer className="bg-gray-100" style={bg}>
            <div className="container mx-auto flex justify-left py-12 ml-10"> 
            <div className="py-5 ml-10">
                <div className="flex gap-6 text-sky-400 justify-center ml-10">
                    <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></Link>
                    <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"/></svg></Link>
                </div>
                <p className="py-5 text-gray-800 ml-10">Copyright © <span id="get-current-year">2023</span> All rights reserved | This Website is made by HM-Tour team</p>
                <p className="text-gray-800 text-center ml-10">Terms & Condition</p>

            </div>
            </div>

        </footer>
    )
}


