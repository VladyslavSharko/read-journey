import Dashboard from "../components/Dashboard/Dashboard";
import MyLibrary from "../components/MyLibrary/MyLibrary";
import "./styles.css";

const MyLibraryPage = () => {
  return (
    <div className="myLibraryPage">
      <Dashboard />
      <MyLibrary />
    </div>
  );
};

export default MyLibraryPage;
