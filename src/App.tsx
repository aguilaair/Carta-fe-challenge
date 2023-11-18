import NavBar from "./components/navbar";
import Sidebar from './components/sidebar';
import Empty from './components/emptyCarta';
import { useCourses } from './state/useCourses';
import Results from './components/results';


function App() {

  const { courses, search, setSearch } = useCourses();


  return (
    <div className="flex flex-col h-screen">
      <NavBar search={search} setSearch={setSearch} />
      <div className="flex flex-row flex-grow ">
        <Sidebar />
        { /* Red divider bar*/}
        <div className=" w-0.5 bg-red-700"></div>
        { /* Results section */}
        <div className="flex-grow">
          {
            search === "" ?
              <Empty />
              :
              <Results search={search} results={courses.searchCourses} />
          }
        </div>
      </div>

    </div >
  );
}

export default App;
