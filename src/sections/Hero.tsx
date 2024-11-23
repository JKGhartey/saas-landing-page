import { Button } from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute hidden lg:block -left-32 top-16">
                    <Image
                        src={designExample1Image}
                        alt="Design example 1"
                        className=""
                    />
                </div>
                <div className="absolute hidden lg:block -right-64 -top-16">
                    <Image
                        src={designExample2Image}
                        alt="Design example 2"
                        className=""
                    />
                </div>
                <div className="absolute hidden lg:block left-56 top-96">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute hidden lg:block right-80 -top-6">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                ✨ $7.5M seed round raised
                </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto ">
                    Design tools should&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form action="" className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto w-full gap-2">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 flex-1 min-w-0 placeholder:text-white/50" />
                    <Button type="submit" variant="primary" size="sm" className="whitespace-nowrap font-semibold" >Sign up</Button>
                </form>
            </div>
        </section>
    );
}
