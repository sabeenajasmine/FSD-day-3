import Welcome from '../components/Welcome';
import ProfileCard from '../components/profilecard';
import './home.css';

function Home() {

  const students = [
    {
      id: 1,
      name: "Sabeena",
      dept: "CSE",
      year: "3rd Year"
    },
    {
      id: 2,
      name: "Sumaiya",
      dept: "IT",
      year: "2nd Year"
    },
    {
      id: 3,
      name: "Shefani",
      dept: "ECE",
      year: "3rd Year"
    }
  ];

  return (
    <div className="home">

      <Welcome />

      <h2>Student Details</h2>

      <div className="student-cards">

        {students.map((student) => (

          <ProfileCard
            key={student.id}
            student={student}
          />

        ))}

      </div>

    </div>
  );
}

export default Home;