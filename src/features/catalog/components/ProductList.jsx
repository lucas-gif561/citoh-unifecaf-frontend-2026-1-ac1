import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from "./ProductCard";

export function ProductList({ products }) {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 product-list">
            {products.map(product => (
                <Col key={product.id}>
                    <ProductCard {...product} />
                </Col>
            ))}
            {products.length === 0 && (
                <Col xs={12}>
                    <p className="text-center text-white mt-4 fs-5">Nenhum equipamento encontrado.</p>
                </Col>
            )}
        </Row>
    );
}