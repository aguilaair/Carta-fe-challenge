import React, { } from 'react';
import { Course } from '../types/courses';
import CourseView from './course';

interface Props {
    search: string;
    results: Course[];
}


const Results: React.FC<Props> = ({ search, results }) => {


    return (
        <div className="flex flex-col px-10 py-10 overflow-y-auto h-[calc(100vh-62px)] bg-white">
            <div className="text-xl text-neutral-500">
                {results.length} results for: {search}
            </div>
            <div className='flex flex-row w-full py-3 space-x-2'>
                <div className='w-20 h-10 bg-gray-300 rounded-sm' />
                <div className='w-20 h-10 bg-gray-300 rounded-sm' />
                <div className='w-20 h-10 bg-gray-300 rounded-sm' />
                <div className='w-20 h-10 bg-gray-300 rounded-sm' />
            </div>
            {results.map((val, idx) => {
                return <CourseView course={val} />
            })}
        </div>
    );
}

export default Results;