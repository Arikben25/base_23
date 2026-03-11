import "./SummaryDashboard.css"
import BudgetCard from "./summaryCards/BudgetCard";
import ConcludingSentence from "./summaryCards/ConcludingSentence";
import GapAnalysisCard from "./summaryCards/GapAnalysisCard";
import OutgoingTasks from "./summaryCards/OutgoingTasks";

export default function SummaryDashboard() {
  return (
    <main className="summaryContainer">
      <section className="upper-cards-grid">
        <ConcludingSentence />
        <BudgetCard />
        <OutgoingTasks />
        <GapAnalysisCard />
      </section>

      <section className="gantt-section">
        {/* Place for your existing Gantt component */}
        <p className="text-gray-400">Gantt Component Placeholder</p>
      </section>
    </main>
  );
}