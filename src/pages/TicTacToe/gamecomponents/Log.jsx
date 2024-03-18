export default function Log({ logs }) {
  return (
    <ol id="log">
      {logs.map((obj) => {
        const { square, player } = obj;
        const { row, col } = square;
        return (
          <li key={String(row).concat(String(col))}>
            Player {player} placed at {row} {col}
          </li>
        );
      })}
    </ol>
  );
}
