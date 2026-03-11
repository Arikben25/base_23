import "./OutgoingTasks.css";
import linkIcon from "../../assets/akar-icons_link-out.svg";
import redIcon from "../../assets/redIcon.svg";
import Card from "../ui/Card";
import arrowsIcon from "../../assets/arrows.svg";
import warning from "../../assets/ph_warning.svg";

export default function OutgoingTasks() {
  const linkImg = <img src={linkIcon} alt="Link" />;
  const signpost = <img src={redIcon} alt="Signpost" />;
  const ph_warning = <img src={warning} alt="Warning" />;
  const arrows = <img src={arrowsIcon} alt="Arrows" />;

  const tasksData = [
    {
      id: 1,
      name: "מעבר ל-OpenShift",
      owner: "מאי",
      date: "17/02/26",
      avatar: "/lior.png",
    },
    {
      id: 2,
      name: "פיתוח",
      owner: "ינאי",
      date: "20/02/26",
      avatar: "/lior.png",
    },
    { id: 3, name: "PC", owner: "ינאי", date: "22/02/26", avatar: "/lior.png" },
  ];

  return (
    <Card title="משימות חורגות" icon={signpost} extraAction={linkImg}>
      <div className="tableHeader">
        <span>שם המשימה {arrows}</span>
        <span>אחראי {arrows}</span>
        <span>תג"ב {arrows}</span>
      </div>

      <div className="tasksList">
        <div className="customScrollIndicator"></div>
        {tasksData.map((task) => (
          <div key={task.id} className="taskRow">
            <div className="taskName">{task.name}</div>

            <div className="taskOwner">
              <img src={task.avatar} alt={task.owner} className="ownerAvatar" />
              <span>{task.owner}</span>
            </div>

            <div className="taskDeadline">
              <span>{task.date}</span>
              <span>{ph_warning}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}