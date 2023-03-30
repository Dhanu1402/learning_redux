export default function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => (
        <p>{title}</p>
      ))}
    </div>
  );
}
