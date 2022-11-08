import React from 'react';

const HomeStats = () => {
    return (
        <div className='my-12'>
            <section className="p-6">
                <h1 className='text-7xl font-bold text-center text-secondary-focus mb-5'>My Stats</h1>
                <div className='md:w-1/3 w-10/12 mx-auto border-double border-b-4 border-secondary-focus'>
                </div>
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 text-secondary">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">150+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                        <p className="text-sm sm:text-base">TED talks</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeStats;