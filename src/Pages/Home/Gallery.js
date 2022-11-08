import React from 'react';
import { PhotoView } from 'react-photo-view';

const Gallery = () => {

    const allPhotos = 12;
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-secondary-focus font-bold text-5xl text-center my-5'>My Clicks</h1>
            <p className='text-center text-xl font-semibold text-accent-content'>Here is some authentic picture that I clicked, <br />Feel free to visit my show Gallery</p>
            <section className="py-6">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <PhotoView src="https://source.unsplash.com/random/301x301/">
                        <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    </PhotoView>

                    {
                        [...Array(allPhotos)].map((e, i) => <PhotoView key={i} src={`https://source.unsplash.com/random/200x200/?${i}`}>
                            <img alt={`PhotoNo${i}`} className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={`https://source.unsplash.com/random/200x200/?${i}`} />
                        </PhotoView>)
                    }

                    <PhotoView src='https://source.unsplash.com/random/302x302/'>
                        <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    </PhotoView>
                </div>
            </section>
        </div>
    );
};

export default Gallery;