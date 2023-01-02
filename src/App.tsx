import "./global.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="appContainer">
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}
