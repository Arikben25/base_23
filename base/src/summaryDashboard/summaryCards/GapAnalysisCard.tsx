import "./GapAnalysisCard.css";
import Card from "../ui/Card";
import editIcon from "../../assets/fluent_edit-16-regular.svg";
import orangeIcon from "../../assets/orangeIcon.svg";

export default function GapAnalysisCard() {
  const editImg = <img src={editIcon} alt="Edit" />;
  const signpost = <img src={orangeIcon} alt="Signpost" />;

  const gapsData = [
    { id: 1, text: "חסר כוח אדם לפרויקט" },
    { id: 2, text: 'הרמ"ט לא אישר את הפרויקט' },
    { id: 3, text: "תקציב חורג" },
  ];

  return (
    <Card title="פערים והמלצות" icon={signpost} extraAction={editImg}>
      <div className="gapsContainer">
        {gapsData.map((gap) => (
          <div key={gap.id} className="gapItem">
            {gap.text}
          </div>
        ))}
      </div>
    </Card>
  );
}