import { Course } from "../types/courses";
import { useEffect, useState } from "react";

const fetchCourses = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/jwass91/f8c0b4f887c5db63434b41ad04d56d03/raw/6b532445911a4a871fc8f29bb00b367c7dd2dc61/carta-courses.json",
  );

  const data = (await response.json()) as Course[];

  return data;
};

export const useCourses = () => {
  let [courses, setCourses] = useState({
    courses: [] as Course[],
    searchCourses: [] as Course[],
  });
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses().then((res) => {
      setCourses({ courses: res, searchCourses: courses.searchCourses });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // This should be a fuzzy search but I will probably not have time to implement it
    let searchCourses = courses.courses.filter((course) => {
      return course.title.toLowerCase().includes(search.toLowerCase());
    });
    setCourses({ courses: courses.courses, searchCourses: searchCourses });
  }, [courses.courses, search]);

  return { courses, search, setSearch };
};
