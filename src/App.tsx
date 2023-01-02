import "./global.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}
