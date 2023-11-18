import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="min-w-[350px] w-[350px] hidden lg:block bg-neutral-100 p-4 overflow-y-auto h-[calc(100vh-62px)]">
            <div className="flex flex-col ">
                <div className="flex flex-row items-center justify-start">
                    <svg className="w-6 h-6 mr-4 text-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>

                    <div className="text-2xl">
                        AUTUMN 23-24
                    </div>
                    <svg className="w-6 h-6 ml-4 text-black " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </div>
                <div className=" h-[0.5px] bg-gray-300 my-3" />
                <div className='text-sm text-gray-500 uppercase'>
                    Pinned Classes
                </div>
                {["CS 147L: Cross-platform Mobile App Development", "MATH 51: Linear Algebra, Multivariable Calculus, and Modern Applications", "CS 147: Introduction to Human-Computer Interaction Design",].map((val, idx) => {
                    return <div className="flex flex-row items-center justify-between p-2 my-2 bg-white shadow-md ">
                        <div className="text-blue-500 cursor-pointer text-md hover:underline hover:text-blue-600">
                            {val}
                        </div>
                    </div>
                })}
                <div className=" h-[0.5px] bg-gray-300 my-3" />
                <div className='text-sm text-gray-500 uppercase'>
                    Quarter overview
                </div>
                <div className=" h-[400px] w-full bg-gray-300 my-3 rounded-md" />
                <div className=" h-[200px] w-full bg-gray-300 my-2 rounded-md" />
                <div className=" h-[50px] w-full bg-gray-300 my-1 rounded-md" />
                <div className=" h-[0.5px] bg-gray-300 my-3" />
            </div>
        </div>
    );
}

export default Sidebar;