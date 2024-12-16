import React from "react";
import EnglishWithMasters from "../images/english-with-masters.jpg";
import TgScreenshot from "../images/telegram-screen.jpg";

const Home: React.FC = () => {
  return (
    <div className="text-[#000]">
      {/* <div className="w-full flex justify-center">
        <img
          src={EnglishWithMasters}
          alt="english with masters"
          className="w-auto h-auto 768:h-[350px]"
        />
      </div> */}
      <h2 className="content-heading mt-1">Research Topic:</h2>
      <p className="content-text">
        The Role of Social Presence in Enhancing Language Learning in Online
        Communities
      </p>
      <h3 className="content-heading mt-1">Research Questions</h3>
      <p className="content-text">
        <b>1.</b> How does social presence in online communities (e.g., language
        learning groups) influence learners’ engagement and motivation? <br />
        <b>2.</b> What are the key factors that contribute to social presence in
        online language communities?
      </p>
      <h4 className="content-heading mt-1">Research Introduction</h4>
      <p className="content-text">
        • Background: Online communication platforms have transformed how people
        interact, especially in language-learning communities. <br /> • Theory:
        Social Presence Theory (SPT) explores how participants feel “present” in
        virtual spaces, fostering emotional connection and engagement. <br /> •
        Context: Online language communities (e.g., Telegram) help learners
        practice communication, providing a space for both educational and
        social interaction.
      </p>
      <h4 className="content-heading mt-1">Research Objective</h4>
      <p className="content-text">
        • Aim: To explore how social presence enhances learning experiences in
        an online English-learning community. <br /> • Focus: Analyzing
        communication patterns (e.g., humor, support, sharing) to understand how
        they contribute to a sense of belonging and engagement.
      </p>
      <h4 className="content-heading mt-1">Literature Review</h4>
      <p className="content-text">
        <b>
          • Social Presence Theory (SPT): <br />{" "}
        </b>{" "}
        • SPT explains how online communication fosters emotional connection and
        a sense of community. <br /> • Applied to language-learning groups, it
        shows how interactions can be emotionally engaging despite physical
        distance.
        <br />
        <b> • Vygotsky’s Sociocultural Theory:</b> <br />• Emphasizes social
        interaction in language development, even in virtual environments.
        <br /> <b> • Communities of Practice (CoP):</b>
        <br /> • Learners engage in mutual learning and knowledge-sharing
        despite geographical distance.
      </p>
      <h4 className="content-heading mt-1">Methodology</h4>
      <p className="content-text">
        Online community "English with Masters" Invite Link:
        <a
          href="https://t.me/+UWGRwWqXmmpEdkBI"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-500"
        >
          {" "}
          https://t.me/+UWGRwWqXmmpEdkBI
        </a>
        <br /> • Participants: interview with 7 Members of a Telegram-based
        English learning community (9,816 members overall). <br />{" "}
        <b> • Data Collection:</b> <br /> • Observation of Textual interactions,
        interviews, and multimedia data (photos, voice recordings). <br /> •
        Semi-structured interviews to explore social presence and learning
        motivation. <br /> • Analysis: Qualitative analysis of interactions and
        thematic content coding.
      </p>
      <h4 className="content-heading mt-1">Key Findings</h4>
      <p className="content-text">
        1. Emotional Presence & Social Engagement: <br />
        • Participants express care and emotional support (e.g., “You’re so
        caring”). <br /> 2. Mutual Learning Support: <br />
        • Peer correction and sharing knowledge enhance social presence and
        motivation (e.g., “We all learn from each other here”). <br /> 3. Humor
        & Informality: <br />
        • Humor helps build connection and reduces emotional distance (e.g.,
        playful banter like “Why did you leave me alone with Fateme?”). <br />{" "}
        4. Sense of Belonging: <br />• Group members express feelings of
        belonging and comfort (e.g., “I feel free to share my views here”).
      </p>
      <div className="w-full flex justify-center">
        <img
          src={EnglishWithMasters}
          alt="english with masters"
          className="w-auto h-auto 768:h-[350px]"
        />
      </div>
      <h4 className="content-heading mt-1">Data Analysis</h4>
      <p className="content-text">
        • Social Presence in Communication: <br />• Emotional engagement and
        frequent interaction enhance social presence. <br />
        • Group Cohesion: <br />
        • Shared jokes, mutual support, and a relaxed communication style build
        a strong sense of community. <br />
        • Humor & Casual Interaction: <br />
        • Humor helps to create a comfortable environment for learning and
        engagement. <br />
      </p>
      <h4 className="content-heading mt-1">Conclusion</h4>
      <p className="content-text">
        • Impact of Social Presence: <br />
        Social presence is crucial for creating an emotionally supportive and
        motivating learning environment in online communities. <br />
        • SPT in Action: <br />
        Participants feel connected emotionally and socially, which enhances
        their learning experience.
      </p>
      <h4 className="content-heading mt-1">Future Research Directions</h4>
      <p className="content-text">
        1. Explore the effect of online community size and frequency of
        interaction on language acquisition. <br />
        2. Investigate the long-term impact of online language communities on
        proficiency. <br />
        3. Study how cultural differences affect perceptions of social presence
        in virtual learning spaces. <br />
      </p>
      <img
        className="h-auto w-auto mt-2 640:h-[400px]"
        src={TgScreenshot}
        alt="telegram group screen"
      />
    </div>
  );
};

export default Home;
