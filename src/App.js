import "bootstrap/dist/css/bootstrap.css";
import Todo from "./components/todo";

function App() {
  return (
    <div className="container">
      <div class="row g-2">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="p-3 mb-2 m-3">
            <Todo />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default App;
