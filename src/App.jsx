import "./styles.css";
import Cell from "./components/cell";

export default function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const activateCells = (index) => {};

  return (
    <div className="wrapper">
      <div className="grid">
        {config.flat(1).map((value, index) => {
          <Cell
            key={index}
            filled={false}
            onClick={() => {
              activateCells(index);
            }}
          />;
        })}
      </div>
    </div>
  );
}
