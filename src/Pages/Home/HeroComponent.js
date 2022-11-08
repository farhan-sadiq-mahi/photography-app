import React from 'react';
import { Link } from 'react-router-dom';

const HeroComponent = () => {
    return (
        <section
            className="relative bg-[url(https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg)] bg-cover bg-center bg-no-repeat mb-5"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/5"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Capture The Moment

                        <strong className="block font-extrabold text-rose-700">
                            Of Life.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        Photography is the art of capturing light with a camera, usually via a digital sensor or film, to create an image. With the right camera equipment, you can even photograph wavelengths of light invisible to the human eye, including UV, infrared, and radio.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;