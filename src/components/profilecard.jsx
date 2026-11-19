import './profilecard.css';

function ProfileCard({ student }) {
  return (
    <article className="profile-card">
      <h2>{student.name}</h2>
      <p>Department: {student.dept}</p>
      <p>Year: {student.year}</p>
    </article>
  );
}

export default ProfileCard;