import "./ConcludingSentence.css"
import Card from "../ui/Card";
import icon from "../../assets/Frame 1000002389.svg"
import linkIcon from "../../assets/akar-icons_link-out.svg"
export default function ConcludingSentence() {
  const sentence = (
    <p className="sentenceContent">
      מערכת אינטואיטיבית המבוססת מודלים המאפשרת קישור וחיבור בתוך חטיבת התכנון,
      לטובת ייעול תהליך הארגון והתכנון
    </p>
  );
  const iconImg = (<img src={icon}></img>)
  const iconLink = (<img src={linkIcon}></img>)

  return (
    <div>
      <Card icon={iconImg} title="משפט קיום" extraAction={iconLink}>
        <div className="circleBg" />
        {sentence}
      </Card>
    </div>
  );
}
