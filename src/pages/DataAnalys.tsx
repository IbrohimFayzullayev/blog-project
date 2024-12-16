import React from "react";
import DataTable from "../images/data-table.png";

const DataAnalys = () => {
  return (
    <div className="text-black">
      <h2 className="content-heading">Data analysis</h2>
      <h3 className="content-heading mt-2">
        Social Presence in Online Communication
      </h3>
      <p className="content-text">
        &emsp; Social presence refers to the degree to which a medium allows
        users to perceive others as “real” or “present” in an interaction.
        According to Biocca et al. (2003), social presence in virtual
        environments can be understood as the feeling of being with another
        during an interaction, which can significantly enhance the quality of
        communication, emotional connection, and collaboration. In the data, the
        casual, humorous exchanges (e.g., “Let me blow on your face my breath is
        so cure…”) reflect a high degree of emotional presence despite the
        digital setting. This suggests that the participants experience a sense
        of connection and intimacy through their communication, which is a core
        component of SPT
      </p>
      <p className="content-text">
        &emsp;Online communities are often defined by the social interaction
        that occurs within them. According to Rourke et al. (2001),
        interpersonal interaction and group dynamics are central to the
        development of social presence in online learning environments. In the
        data, the participants demonstrate frequent interaction with one another
        through shared jokes, personal stories, and comments, which strengthens
        their social bonds. These frequent interactions contribute to the
        group’s cohesiveness, a key component of social presence.
      </p>
      <p className="content-text">
        &emsp;This aligns with Garrison et al. (2000), who highlight that
        continuous, ongoing interactions are essential for building a sense of
        community in online groups. By engaging in regular communication, the
        participants create a virtual presence that feels as meaningful and
        intimate as face-to-face interactions. Their willingness to share
        personal details, support each other, and joke around builds a
        collective sense of togetherness, even when they are physically distant.
      </p>
      <p className="content-text">
        &emsp;Social Presence Theory, which focuses on the degree to which a
        person feels socially present in a mediated communication environment,
        aligns well with many of the experiences shared by the participants in
        the responses.The theory emphasizes the importance of emotional presence
        and social engagement, a sense of belonging, humor, and informality in
        online spaces, which are key components reflected. Most importantly,
        mutual support in this community helps to enhance learning.
      </p>
      <img src={DataTable} alt="table" />
    </div>
  );
};

export default DataAnalys;
