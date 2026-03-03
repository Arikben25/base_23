import Card from "../ui/Card";
import linkIcon from "../../assets/akar-icons_link-out.svg";
import icon from "../../assets/Frame 1000002389.svg";
import editIcon from "../../assets/fluent_edit-16-regular.svg";

export default function BudgetCard() {
  const mineIcon = <img src={icon}></img>;
  const linkImg = (
    <div style={{ display: "flex", gap: "7px" }}>
      <img src={linkIcon}></img>
      <img src={editIcon}></img>
    </div>
  );
  return (
    <div>
      <Card title="תקציבים" icon={mineIcon} extraAction={linkImg}>
        <div>ghsdghgdhdshsdhg</div>
      </Card>
    </div>
  );
}
