import React, { } from 'react';
import { Course } from '../types/courses';

interface Props {
    course: Course;
}


const CourseView: React.FC<Props> = ({ course }) => {
    const [isReadingMore, setIsReadingMore] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className="flex flex-col space-y-3 max-w-[1100px]">
            <div className="flex flex-row items-end justify-between pt-3">
                <div className='text-lg text-blue-500 cursor-pointer hover:underline' onClick={
                    () => {
                        setIsExpanded(!isExpanded);
                    }
                }>
                    {course.course_codes[0]}: {course.title}
                </div>
                {course.seasons_offered.length > 0 ?
                    <div className='px-5 py-2 text-white bg-red-700 rounded-md cursor-pointer hover:bg-red-800'>
                        Pin to {(course.seasons_offered[0] as String)}
                    </div>
                    : <div className='px-5 py-2 bg-gray-300 rounded-md cursor-pointer text-neutral-700'>
                        Not Offered
                    </div>}
            </div>
            <div className='flex flex-row items-start justify-between space-x-2'>
                <div className='flex flex-col items-start w-2/3'>
                    <div className=''>
                        {isReadingMore ? course.description : course.description.slice(0, 400)} {course.description.length > 400 ? [isReadingMore ? "" : "...", <span className='text-blue-500 cursor-pointer hover:underline' onClick={
                            () => {
                                setIsReadingMore(!isReadingMore);
                            }
                        }> {isReadingMore ? "Read Less" : "Read More"}</span>] : ""}
                    </div>
                    <div className='pt-2 text-blue-500 cursor-pointer hover:underline'>
                        Show Schedule
                    </div>
                </div>
                <div className='flex flex-col items-start flex-1'>
                    <div className='flex flex-row'>
                        <div className='font-bold '>
                            Term:
                        </div>
                        <div className='pl-2 '>
                            {course.seasons_offered.length > 0 ? course.seasons_offered.map((item) => {
                                return item.toUpperCase().slice(0, 3);
                            }).join(" ,") : "Not Available"}
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='font-bold '>
                            Units:
                        </div>
                        <div className='pl-2 '>
                            {course.min_units !== course.max_units ? `${course.max_units}-${course.min_units}` : course.max_units}
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='font-bold '>
                            Grading:
                        </div>
                        <div className='pl-2 '>
                            {course.grading}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-bold '>
                            Instructors:
                        </div>
                        <div className=''>
                            Not In Demo?
                        </div>
                    </div>
                </div>
            </div>
            {isExpanded ?
                <div className='flex flex-row items-start justify-between px-10 py-8 rounded-lg shadow-xl w-fit'>
                    <div className='flex flex-row items-start space-x-2'>
                        <div className='pr-2 font-bold'>
                            Instructor Ratings:
                        </div>
                        {course.ratings.length === 0 ? "Ratings not available" : null}
                        <div className='pl-2'>
                            {course.ratings.length > 0 ? course.ratings.map((item) => {
                                return <div className=''>
                                    {item.instructor_name} ({`${item.term.season ?? ""} ${item.term.start_year}-${item.term.end_year}`.trim()})
                                </div>
                            }) : null}
                        </div>
                        <div className='pl-2'>
                            {course.ratings.length > 0 ? course.ratings.map((item) => {
                                return <div className='flex flex-row items-center'>
                                    <b>{item.average_rating}</b> / 5 <div className='pl-3 text-sm text-gray-500'>{item.num_ratings} ratings</div>
                                </div>
                            }) : null}
                        </div>
                    </div>
                    {/** Close Button */}
                    <div className='flex flex-row items-start justify-center px-2 py-1 ml-6 rounded-md cursor-pointer outline-red-700 outline outline-1 hover:outline-2' onClick={
                        () => {
                            setIsExpanded(false);
                        }

                    }>
                        Close
                    </div>
                </div> : null}
            <div className='h-[0.5px] bg-gray-300 mx-4' />
        </div>
    );
}

export default CourseView;