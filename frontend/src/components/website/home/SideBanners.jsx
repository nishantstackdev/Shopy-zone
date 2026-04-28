import Image from "next/image";

export default function SideBanners() {
    return (
        <div className="w-full py-6 bg-slate-50">
            <div className="grid  max-w-7xl my-3 grid-cols-1 mx-auto md:grid-cols-3 gap-4 h-full">
                <div data-aos="fade-right" className="relative h-[320px]  mx-4 lg:mx-0 lg:px-0 rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/poster1.jpg"
                        alt="Left Banner"
                        fill
                        className="object-cover  hover:scale-105 transition duration-500"
                    />
                </div>
                {/* Right Image */}
                <div className="relative h-[320px]  hidden md:block rounded-xl overflow-hidden" data-aos="zoom-in">
                    <Image
                        src="/images/home/poster2.jpg"
                        alt="Right Banner"
                        fill
                        className="object-cover  hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Middle Images */}
                <div data-aos="fade-left" className="flex flex-col gap-4">

                    <div className="relative h-[150px]  hidden md:block rounded-xl overflow-hidden">
                        <Image
                            src="/images/home/poster3.jpg"
                            alt="Top Banner"
                            fill
                            className="object-cover  hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="relative h-[150px]  hidden md:block rounded-xl overflow-hidden">
                        <Image
                            src="/images/home/poster4.jpg"
                            alt="Bottom Banner"
                            fill
                            className="object-cover  hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Left Image */}






        </div>
    );
}