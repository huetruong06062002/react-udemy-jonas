export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You should add item to 🛬!</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percengage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPacked === 100
          ? "Strat adding some items to your packing list🛬"
          : ` 
        💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percengage}%) ✈️`}
      </em>
    </footer>
  );
}
