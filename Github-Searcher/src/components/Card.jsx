const Card = ({image, username, profile_link}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <a href={profile_link} className="btn btn-secondary rounded-4" target="_blank">
          Go Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
