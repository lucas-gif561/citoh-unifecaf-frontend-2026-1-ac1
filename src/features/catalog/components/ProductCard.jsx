import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import fallbackImage from '../../../assets/images/Weapons.png';

export function ProductCard({ name, price, category, image }) {
    const [imgSrc, setImgSrc] = useState(image);

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    return (
        <Card className="product-card h-100">
            <div className="card-img-container">
                <Card.Img 
                  variant="top" 
                  src={imgSrc} 
                  alt={name} 
                  onError={() => {
                    setImgSrc(fallbackImage);
                  }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <div className="mt-auto">
                    <Badge bg="secondary" className="mb-2">{category}</Badge>
                    <Card.Text className="fs-5 fw-bold text-success mb-0">
                        {formattedPrice}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}