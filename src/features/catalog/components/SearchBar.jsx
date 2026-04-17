import Form from 'react-bootstrap/Form';

export function SearchBar({ search, setSearch }) {
    return (
        <Form className="mb-4">
            <Form.Control
                type="text"
                placeholder="Buscar equipamento..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="lg"
            />
        </Form>
    );
}