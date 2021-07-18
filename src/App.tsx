import "./App.css";
import Products from "./products/Products";

export default function App() {
  return (
    <div className="App">
      <h2 className="pt-5 text-warning">Admin Dashboard</h2>
      <small id="credit">
        Assignment by{" : "}
        <a href="https://masfikul-alam.web.app" className="text-warning">
          masfikalamfrp@gmail.com
        </a>
      </small>

      <Products />
    </div>
  );
}
