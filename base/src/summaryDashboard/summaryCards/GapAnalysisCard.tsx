import Card from "../ui/Card";
import editIcon from "../../assets/fluent_edit-16-regular.svg";
import orangeIcon from "../../assets/orangeIcon.svg"

export default function GapAnalysisCard() {
  const editImg = <img src={editIcon}></img>;
  const signpost = <img src={orangeIcon}></img>;

  return (
    <Card title="פערים והמלצות" icon={signpost} extraAction={editImg}>
      <div></div>
    </Card>
  );
}