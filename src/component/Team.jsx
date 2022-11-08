import React from "react";
import teamData from "../component/TeamData";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Card = (props) => {
  const { name, role, img, facebook, instagram, twitter } = props;
  return (
    <div className="team-card">
      <img src={img} alt="team-img" />
      <h2 className="team-name"> {name} </h2>
      <p className="team-role"> {role} </p>
      <div className="team-links">
        <a href={facebook} target="_blank">
          <span className="team-icon-span">
            <FaFacebookF className="team-icon" />
          </span>
        </a>
        <a href={instagram} target="_blank">
          <span className="team-icon-span">
            <FaInstagram className="team-icon" />
          </span>
        </a>
        <a href={twitter} target="_blank">
          <span className="team-icon-span">
            <FaTwitter className="team-icon" />
          </span>
        </a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <section className="section team-section">
        <div className="team-section-top">
          <h2 className="section-heading">OUR TEAM</h2>
          <p className="team-section-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at
            delectus laudantium, deserunt, atque eveniet. Voluptatem, fuga quos
            rerum inventore.
          </p>
        </div>
        <div className="team-section-card">
          {teamData.map((val) => {
            const { id, name, role, img, facebook, instagram, twitter } = val;
            return (
              <Card
                key={id}
                name={name}
                role={role}
                img={img}
                facebook={facebook}
                instagram={instagram}
                twitter={twitter}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Team;
