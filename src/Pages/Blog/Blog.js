import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className='container mx-auto'>
                <section className=" ">
                    <div className="container text-secondary font-bold flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">Difference between SQL and NoSQL ?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. </p>
                            </details>
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">What is JWT, and how does it work?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). </p>
                            </details>
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">What is the difference between javascript and Node JS?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                            </details>
                            <details className="w-full border rounded-lg cursor-pointer">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400">How does Node JS handle multiple requests at the same time?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-800">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;