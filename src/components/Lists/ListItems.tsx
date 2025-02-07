export default function ListItems() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
  ];
  return (
    <ul>
      {tasks.map((item, index) => (
        <li key={index}>
          <h3>{item.task}</h3>
          <span>{item.time}</span>
        </li>
      ))}
    </ul>
  );
}
