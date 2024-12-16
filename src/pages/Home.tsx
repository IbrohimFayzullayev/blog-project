import React from "react";
import EnglishWithMasters from "../images/english-with-masters.jpg";
import TgScreenshot from "../images/telegram-screen.jpg";
// import MethodologyVideo from "../images/methodology.mp4";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        {/* <div className="video-container">
          <video className="w-full h-auto" controls autoPlay muted loop>
            <source src={MethodologyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <h2 className="content-heading mt-1">Research Topic:</h2>
        <p className="content-text">
          &emsp;The Role of Social Presence in Enhancing Language Learning in
          Online Communities
        </p>
        <h3 className="content-heading mt-1">Research Questions</h3>
        <p className="content-text">
          &emsp;<b>1.</b> How does social presence in online communities (e.g.,
          language learning groups) influence learners’ engagement and
          motivation? <br />
          &emsp;<b>2.</b> What are the key factors that contribute to social
          presence in online language communities?
        </p>
        <h4 className="content-heading mt-1">Research Introduction</h4>
        <p className="content-text">
          &emsp; <b>• Background:</b> Online communication platforms have
          transformed how people interact, especially in language-learning
          communities. <br />
          &emsp; <b>• Theory:</b> Social Presence Theory (SPT) explores how
          participants feel “present” in virtual spaces, fostering emotional
          connection and engagement. <br />
          &emsp; <b>• Context:</b> Online language communities (e.g., Telegram)
          help learners practice communication, providing a space for both
          educational and social interaction.
        </p>
        <h4 className="content-heading mt-1">Research Objective</h4>
        <p className="content-text">
          &emsp;<b>• Aim:</b> To explore how social presence enhances learning
          experiences in an online English-learning community. <br /> &emsp;
          <b>• Focus:</b> Analyzing communication patterns (e.g., humor,
          support, sharing) to understand how they contribute to a sense of
          belonging and engagement.
        </p>
        <h4 className="content-heading mt-1">Literature Review</h4>
        <p className="content-text">
          &emsp;
          <b>
            • Social Presence Theory (SPT): <br />{" "}
          </b>{" "}
          &emsp;• SPT explains how online communication fosters emotional
          connection and a sense of community. <br /> &emsp;• Applied to
          language-learning groups, it shows how interactions can be emotionally
          engaging despite physical distance.
          <br />
          &emsp;<b>• Vygotsky’s Sociocultural Theory:</b> <br />
          &emsp;• Emphasizes social interaction in language development, even in
          virtual environments.
          <br /> &emsp;<b>• Communities of Practice (CoP):</b>
          <br /> &emsp;• Learners engage in mutual learning and
          knowledge-sharing despite geographical distance.
        </p>
        <h4 className="content-heading mt-1">Methodology</h4>
        <p className="content-text">
          &emsp;Online community "English with Masters" Invite Link:
          <a
            href="https://t.me/+UWGRwWqXmmpEdkBI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            {" "}
            https://t.me/+UWGRwWqXmmpEdkBI
          </a>
          <br /> &emsp;<b>• Participants:</b> interview with 7 Members of a
          Telegram-based English learning community (9,816 members overall).{" "}
          <br /> <b> &emsp;• Data Collection:</b> <br /> &emsp;• Observation of
          Textual interactions, interviews, and multimedia data (photos, voice
          recordings). <br /> &emsp;• Semi-structured interviews to explore
          social presence and learning motivation. <br /> &emsp;
          <b>• Analysis:</b>
          Qualitative analysis of interactions and thematic content coding.
        </p>
        <h4 className="content-heading mt-1">Key Findings</h4>
        <p className="content-text">
          <b>1. Emotional Presence & Social Engagement:</b> <br />
          &emsp;• Participants express care and emotional support (e.g., “You’re
          so caring”). <br /> <b>2. Mutual Learning Support:</b> <br />
          &emsp;• Peer correction and sharing knowledge enhance social presence
          and motivation (e.g., “We all learn from each other here”). <br />{" "}
          <b>3. Humor & Informality: </b>
          <br />
          &emsp;• Humor helps build connection and reduces emotional distance
          (e.g., playful banter like “Why did you leave me alone with Fateme?”).{" "}
          <br /> <b>4. Sense of Belonging:</b> <br />
          &emsp;• Group members express feelings of belonging and comfort (e.g.,
          “I feel free to share my views here”).
        </p>
        {/* <div className="w-full flex justify-center">
          <img
            src={EnglishWithMasters}
            alt="english with masters"
            className="w-auto h-auto 768:h-[350px]"
          />
        </div> */}
        <h4 className="content-heading mt-1">Data Analysis</h4>
        <p className="content-text">
          &emsp;• Social Presence in Communication: <br />
          &emsp;• Emotional engagement and frequent interaction enhance social
          presence. <br />
          &emsp;• <b>Group Cohesion:</b> <br />
          &emsp;• Shared jokes, mutual support, and a relaxed communication
          style build a strong sense of community. <br />
          &emsp;• <b>Humor & Casual Interaction:</b> <br />
          &emsp;• Humor helps to create a comfortable environment for learning
          and engagement. <br />
        </p>
        <h4 className="content-heading mt-1">Conclusion</h4>
        <p className="content-text">
          &emsp;• <b>Impact of Social Presence:</b> <br />
          &emsp;Social presence is crucial for creating an emotionally
          supportive and motivating learning environment in online communities.{" "}
          <br />
          &emsp;• <b>SPT in Action:</b> <br />
          Participants feel connected emotionally and socially, which enhances
          their learning experience.
        </p>
        <h4 className="content-heading mt-1">Future Research Directions</h4>
        <p className="content-text">
          &emsp;1. Explore the effect of online community size and frequency of
          interaction on language acquisition. <br />
          &emsp;2. Investigate the long-term impact of online language
          communities on proficiency. <br />
          &emsp;3. Study how cultural differences affect perceptions of social
          presence in virtual learning spaces. <br />
        </p>
        {/* <img
          className="h-auto w-auto mt-2 640:h-[400px]"
          src={TgScreenshot}
          alt="telegram group screen"
        /> */}
      </div>
      <div className="bg-[#565656] p-2">
        <img
          src={EnglishWithMasters}
          alt="english with masters"
          className="w-auto h-auto"
        />

        <img
          className="h-auto w-auto mt-3 640:h-[400px]"
          src={TgScreenshot}
          alt="telegram group screen"
        />
      </div>
    </div>
  );
};

export default Home;
