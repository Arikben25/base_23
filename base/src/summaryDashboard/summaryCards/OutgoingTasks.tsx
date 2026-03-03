import linkIcon from "../../assets/akar-icons_link-out.svg";
import redIcon from "../../assets/redIcon.svg"
import Card from "../ui/Card";

export default function OutgoingTasks() {
  const linkImg = <img src={linkIcon}></img>;
    const signpost = <img src={redIcon}></img>;


  return (
    <Card title="משימות חורגות" icon={signpost} extraAction={linkImg}>
      <div></div>
    </Card>
  );
}
