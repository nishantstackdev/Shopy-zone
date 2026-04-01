import Image from "next/image";

export default function SideBanners() {
    return (
        <div className="w-full py-6 bg-slate-50">
            <div className="grid  max-w-7xl my-3 grid-cols-1 mx-auto md:grid-cols-3 gap-4 h-full">
                <div className="relative h-[320px] border mx-4 lg:mx-0 lg:px-0 rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/left.jpg"
                        alt="Left Banner"
                        fill
                        className="object-cover  hover:scale-105 transition duration-500"
                    />
                </div>
                {/* Right Image */}
                <div className="relative h-[320px] border hidden md:block rounded-xl overflow-hidden">
                    <Image
                        src="/images/home/right.jpg"
                        alt="Right Banner"
                        fill
                        className="object-cover  hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Middle Images */}
                <div className="flex flex-col gap-4">

                    <div className="relative h-[150px] border hidden md:block rounded-xl overflow-hidden">
                        <Image
                            src="/images/home/top.jpg"
                            alt="Top Banner"
                            fill
                            className="object-cover  hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="relative h-[150px] border hidden md:block rounded-xl overflow-hidden">
                        <Image
                            src="/images/home/bottom.jpg"
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