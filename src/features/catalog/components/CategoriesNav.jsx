import Nav from "react-bootstrap/Nav";

export function CategoriesNav({ categories, selectedCategory, onSelectCategory }) {
  return (
    <Nav variant="pills" className="mb-4 d-flex justify-content-center gap-2 flex-wrap">
      {categories.map((category) => (
        <Nav.Item key={category}>
          <Nav.Link
            active={category === selectedCategory}
            onClick={() => onSelectCategory(category)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
