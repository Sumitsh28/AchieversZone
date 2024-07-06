import TeamMember from "./TeamMember";
import q from "../../assets/members/2.png";
import w from "../../assets/members/1.png";
import e from "../../assets/members/5.png";
import r from "../../assets/members/4.png";
import t from "../../assets/members/3.png";
import y from "../../assets/members/6.png";
import u from "../../assets/members/7.png";

const teamMembers = [
  {
    name: "Shivansh",
    role: "Chemistry Faculty",
    clg: "IIT BHU",
    image: q,
  },
  {
    name: "Yash Verma",
    role: "Maths Faculty",
    clg: "IIT BHU",
    image: w,
  },
  {
    name: "Vikash",
    role: "Maths Faculty",
    clg: "IIT BHU",
    image: e,
  },
  {
    name: "Swapn Gupta",
    role: "Physics Faculty",
    clg: "IIT Jodhpur",
    image: r,
  },
  {
    name: "Anju Prajapati",
    role: "Physics Faculty",
    clg: "IIT BHU",
    image: t,
  },
  {
    name: "Ankit Gaur",
    role: "Physics Faculty",
    clg: "NIT Patna",
    image: y,
  },
  {
    name: "Siddharth",
    role: "Biology Faculty",
    clg: "NEET Qualified",
    image: u,
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12  ">
        <div className="container ">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="md:text-5xl font-bold text-2xl text-primary dark:text-primary"
            >
              Meet Our Teachers
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Achieve Your Best with Our Expert Teachers
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* services cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-center items-center">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  clg={member.clg}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
