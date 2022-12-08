import s from "./Profile.module.css";
import Myposts from "./Myposts/Myposts.jsx";
import Profileinfo from "./Profileinfo/Profileinfo";

function Profile(props) {
  return (
    <div>
      <Profileinfo />
      <Myposts />
    </div>
  );
}
export default Profile;
