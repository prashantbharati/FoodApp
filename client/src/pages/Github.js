import React, { useEffect, useState } from "react";

const Github = () => {
  const [img, setImg] = useState("");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/prashantbharati")
      .then((res) => res.json())
      .then((data) => {
        setImg(data.avatar_url);
        setFollowers(data.followers);
        setFollowing(data.following);
      });
  }, []);

  return (
    <div>
      <img src={img} alt="self"></img>
      <p>{followers}</p>
      <p>{following}</p>
    </div>
  );
};

export default Github;
