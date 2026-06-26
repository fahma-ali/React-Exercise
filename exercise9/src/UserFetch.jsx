import { useState, useEffect, use } from "react";
const GetHubProfile = () => {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState(""); // default username so something shows on first load
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (user === "") return;
    const userFetch = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        if (data.message === "Not Found") {
          setProfile(null);
          setError(true);
        } else {
          setProfile(data);
          setError(false);
          console.log(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    userFetch();
  }, [user]);
  const userHandle = () => {
    setUser(searchInput);
  };
  return (
    <>
      <div>
        <h1>Github User Search</h1>
        <input
          type="text"
          placeholder="Enter Github User"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button onClick={userHandle}>Search</button>
      </div>

      {!error && profile && (
        <div>
          <h3> {profile.name}</h3>

          <img src={profile.avatar_url} alt={profile.name} width="100" />
          <p> Bio:{profile.bio}</p>
          <p> Public Repo:{profile.public_repos}</p>
        </div>
      )}
      {error && <h1>Not Valid User</h1>}
    </>
  );
};

export default GetHubProfile;
