import NotesCard from "./NotesCard";
import boards from "../../assets/website/Boards.png";
import jeem from "../../assets/website/jeem.png";
import jeea from "../../assets/website/jeea.png";

const notes = [
  {
    name: "Boards Notes",
    img: boards,
  },
  {
    name: "JEE Mains/NEET Notes",
    img: jeem,
  },
  {
    name: "JEE Advanced Notes",
    img: jeea,
  },
];

const Notes = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12  h-screen">
        <div className="container ">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="md:text-5xl font-bold text-2xl text-primary dark:text-primary"
            >
              Notes
            </h1>
          </div>

          <div className="flex items-center justify-center">
            {/* services cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-center items-center">
              {notes.map((member, index) => (
                <NotesCard key={index} name={member.name} img={member.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
