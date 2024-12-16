import React from "react";
import OnlineCommunity from "../images/online-community.jpg";

const Introduction = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        <h3 className="content-heading">Research Introduction</h3>
        <p className="mt-2 content-text">
          &emsp;When online communication platforms has start to rise it has
          transformed how a person interact with another person throughout the
          distances, online communities or group where individuals can connect
          their knowledge, support one another and create social links. Online
          language-learning communities are one setting where this shift is
          especially noticeable, as members gather there to established their
          communication abilities. These kind of communities sometimes or to be
          more exact frequently use different types of social media platforms
          and texting application, like as Telegram, Facebook, Whatsapp and
          others, to engage in continuous interactions that combine both casual
          chatter and instructional materials. But there is a point to be noted
          that sometimes using public communication platforms depends where a
          person is living or which country they belong to because some
          countries provide their own online application and gives prohibitory
          order to use international online communication application.
        </p>
        <p className="mt-2 content-text">
          &emsp;One important theory that helps explain the dynamics of these
          online communities is Social Presence Theory (SPT), which inspects the
          degree to which a communication medium allows members to feel
          "present" with one another despite physical distances. Social presence
          is more than just considering individuals as there; it also includes
          actively engaging in social interactions and experiencing emotional
          attachment. More emotional support, greater communication, and a
          stronger sense of belonging have all been associated with high levels
          of social presence in language-learning groups.
        </p>
        <h4 className="content-heading mt-2">Research Objective</h4>
        <p className="content-text">
          &emsp;The purpose of this study is to investigate how social presence
          appears in a group of people who mostly communicate online in order to
          get better at the English language. Or we can say how people want to
          improve their English language proficiency by using online community.
          Because, nowadays people are getting interested to get higher
          education from abroad. And for that reason English language is a must.
          By examining qualitative data collected from group members in a
          specific language-learning community, the study seeks to identify key
          communication patterns—such as the use of humor, emotional support,
          and mutual sharing—that contribute to social presence. In particular,
          the study will sheds light on  how participants interact with one
          another through informal dialogue, tales, and group learning exercises
          to improve their social presence and create a feeling of community.
          And we had focused and observed a Telegram online learning community.
          In order to improve the learning process and foster significant social
          connections, we want to get a better knowledge of how online
          language-learning communities use digital atmosphere. Furthermore, the
          research will enlarge our understanding of Social Presence Theory and
          its relevance to virtual learning environments. Social presence
          affects communication teamwork, trust, and relationship
          quality.Communication media vary in their ability to transmit social
          cues (like tone, facial expressions, or body language) and this is
          suggested by SPT. Richer media, such as video conferencing, foster
          higher social presence than text-based media like emails or chat.
        </p>
        <h4 className="content-heading mt-2">Research Questions: </h4>
        <p className="content-text">
          &emsp;<b>1.</b> How does social presence in online communities (e.g.,
          language learning groups) influence learners’ engagement and
          motivation?
          <br /> &emsp;<b>2.</b> What are the key factors that contribute to
          social presence in online language communities?
        </p>
      </div>
      <div className="bg-[#565656] p-2">
        <img src={OnlineCommunity} alt="online-community" />
      </div>
    </div>
  );
};

export default Introduction;
