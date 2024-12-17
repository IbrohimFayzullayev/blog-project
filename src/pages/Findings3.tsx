import React from "react";
import TgScreen1 from "../images/humor-screen1.jpg";
import TgScreen2 from "../images/humor-screen2.jpg";
import TgScreen3 from "../images/humor-screen3.jpg";

const Findings3 = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        <h2 className="content-heading">
          3. Humor and Informality as Enhancers of Social Presence
        </h2>
        <p className="content-text mt-1">
          &emsp;One of the significant findings from the literature is that
          humor plays a crucial role in enhancing social presence in online
          communication. Derks, Fischer, and Bos (2008) stated that humor helps
          to reduce the emotional distance between individuals and promotes
          positive relationships in virtual environments. Humor, as seen in the
          data through playful comments (e.g.,{" "}
          <i>
            {" "}
            “What the hell guys why you leave me alone with Fateme? I feel
            myself as captured a lion in a cage with Fateme”
          </i>
          ), creating a relaxed atmosphere in which participants can feel more
          emotionally connected. The casual tone fosters a sense of spontaneity
          and comfort, essential for increasing social presence. <br /> &emsp;In
          our data, some of the conversation includes playful banter (e.g.,{" "}
          <i>“Peace u r missed badly”)</i>. Appereantly, the use of humor and
          casual interactions helps create a relaxed, comfortable environment
          where members feel connected. This type of communication strengthens
          the social presence of the group, fostering a sense of belonging.
          Humor, as seen in these interactions, helps to humanize online
          communication, making it feel more genuine and thus increasing social
          presence. The informal, back-and-forth nature of the conversation
          reflects a frequent and spontaneous interaction style, which is
          another indicator of high social presence. The more frequently people
          communicate, especially with personal, supportive, and humorous
          exchanges, the higher the level of social presence they experience, as
          they begin to feel closer to one another. <br />
          &emsp;Another example of humor is seen in the interaction between
          Vedat and Fateme, when she had got sore throat and Vedat made a joke
          suggesting blowing on her face with “cure” breath to recover in
          affectionate way to engage her when she is feeling unwell, in responce
          to his humor Fateme also replied in the same way by saying “leads to
          death”.This is a piece live interaction which helps to feel more
          connected than a formal exchange.This ongoing humor leads to
          continuation of another joke about breathing topic again restricting
          each other having a breath after discussing the fact of the
          accelerating of humam breathing and climate change.Despite the humor
          being based on a silly concept, the quick, back-and-forth exchange
          creates a sense of closeness or presence between the communicators.
          There’s an implicit understanding that the comments are not serious
          but instead form part of an ongoing, shared humorous interaction.{" "}
          <br />
          &emsp;The role of informal communication is also discussed in
          Walther’s (1992) <i> social information processing theory </i>, which
          emphasizes how people adapt their communication styles to increase
          relational closeness in digital environments. Informal and humorous
          communication leads to greater perceived social presence by creating a
          humanized, emotionally engaging environment where participants can
          establish connections beyond transactional or formal interactions.
        </p>
      </div>
      <div className="bg-[#565656] p-2">
        <img src={TgScreen1} alt="screen1" />
        <img src={TgScreen2} alt="screen2" className="mt-2" />
        <img src={TgScreen3} alt="screen3" className="mt-2" />
      </div>
    </div>
  );
};

export default Findings3;
