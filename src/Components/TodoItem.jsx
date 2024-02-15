import Todo from "./Todo";

export default function TodoItem({ item, index}) {
  return (
    <div className="TodoItem">
      <h2 key={index}>{item}</h2>
    </div>
  );
}
