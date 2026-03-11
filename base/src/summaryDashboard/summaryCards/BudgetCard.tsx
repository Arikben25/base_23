import "./BudgetCard.css";
import Card from "../ui/Card";
import linkIcon from "../../assets/akar-icons_link-out.svg";
import icon from "../../assets/Frame 1000002389.svg";
import editIcon from "../../assets/fluent_edit-16-regular.svg";
import wallet from "../../assets/walletIcon.svg";
import a from "../../assets/Frame.svg";
import checkList from "../../assets/Frame (1).svg";

export default function BudgetCard() {
  const mineIcon = <img src={icon} alt="Icon" />;
  const linkImg = (
    <div style={{ display: "flex", gap: "7px" }}>
      <img src={linkIcon} alt="Link" />
      <img src={editIcon} alt="Edit" />
    </div>
  );

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const data = [
    { id: 1, label: "עלות הפרויקט", value: 1000000, icon: <img src={wallet} alt="Wallet" /> },
    { id: 2, label: "אושר", value: 500000, icon: <img src={a} alt="Approved" /> },
    { id: 3, label: "פער", value: 500000, icon: <img src={checkList} alt="Checklist" /> },
  ];

  const progressPercentage = (data[1].value / data[0].value) * 100;

  return (
    <div>
      <Card title="תקציבים" icon={mineIcon} extraAction={linkImg}>
        <div className="budgetContainer">
          {data.map((item) => (
            <div key={item.id} className="budgetRow">
              <div className="labelSection">
                <div className="iconFrame">{item.icon}</div>
                <span className="labelText">{item.label}</span>
              </div>
              <div className="valueSection">
                <span className="valueNumber">{formatNumber(item.value)}</span>
                <span className="shekelSymbol">₪</span>
              </div>
            </div>
          ))}
          <div 
            className="BottomGraph" 
            style={{background: `linear-gradient(to left, #ffc400 ${progressPercentage}%, #f4f4f4 0%)`}}
          ></div>
        </div>
      </Card>
    </div>
  );
}