import React from "react";
import MethodologyVideo from "../images/methodology.mp4";

const Methodology = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        <div className="video-container">
          <video className="w-full h-auto" controls autoPlay muted loop>
            <source src={MethodologyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="content-heading mt-2">Methodology</h2>
        <p className="mt-2 content-text">
          &emsp;The participants for this study are members of an online
          language learning community on the Telegram platform who actively
          engage in improving their English language skills. Studied online
          community (English with Masters) where 9,816 members from different
          backgrounds joined to enhance their English. Nearly fifteen moderators
          control group interaction and follow community rules and restrictions.
          They organize different online classes, such as quiz time, speaking,
          and vocabulary classes.
        </p>
        <p className="mt-2 content-text">
          &emsp;Data was collected from seven community members, ranging from
          early learners to advanced speakers, across different age groups and
          nationalities. For instance, participants like Abdurahmon (18,
          Uzbekistan), Mohammad (39, Iran), Vedat (Turkey), Peace, Rayyan
          (India), and Fateme (Iran) provide rich insights into how diverse
          backgrounds influence perceptions of social presence and engagement in
          learning environments. A purposeful sampling method was used to find
          these active members of this online ESL community who frequently
          interact in the group and are engaged to learn language. Informed
          consent about the scope of our research, their right to withdraw, and
          how their data was used, was shared in their private space of the
          Telegram application. Moreover, their consent was taken to use
          personal information and photos of profiles for study purposes.{" "}
        </p>
        <p className="mt-2 content-text">
          &emsp;As a data collection, observation of textual interaction of the
          online ESL community, active participant interviews, and multimedia
          data (e.g., sharing photos, using personal names, videos, emoji) were
          gathered. Semi-structured interviews were conducted to explore in
          depth the experiences of the participants in the community and
          insights regarding the role of social presence in their learning.
          Open-ended questions helped to focus on how they perceive the level of
          connection with other members and its impact on their learning
          motivation. As a sharing tool, the Telegram application functions
          allowed us to collect all the data: shared learning videos, discussion
          chats, voice recordings, and presentations posted by the community.The
          platform of Zoom was used to organize interviews with active
          participants and record them. These recordings were transcribed
          manually for analysis.
        </p>
        <p className="mt-2 content-text">
          &emsp;A qualitative analysis of online conversations and interactions
          within the groups involves analyzing message content, frequency of
          participation, and the presence of personalized communication (e.g.,
          sharing photos, using personal names, or engaging in friendly
          banter).Manually coding and thematic content analyses were used to
          code and analyze the textual data and multimedia data, identify
          recurring themes, and map interactions within the community.
        </p>
      </div>
      <div className="bg-[#565656] p-2"></div>
    </div>
  );
};

export default Methodology;
