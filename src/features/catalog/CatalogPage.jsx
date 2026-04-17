import { useState } from "react";
import Container from "react-bootstrap/Container";
import productsData from "./data/products.json";
import { SearchBar } from "./components/SearchBar";
import { ProductList } from "./components/ProductList";
import { CategoriesNav } from "./components/CategoriesNav";

export function CatalogPage() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const categories = [
        "Todas",
        ...new Set(productsData.map((product) => product.category)),
    ];

    function filterProducts(search, selectedCategory) {
        return productsData.filter(product => {
            const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
            const matchCategory = selectedCategory === "Todas" || product.category === selectedCategory;
            
            return matchSearch && matchCategory;
        });
    }

    const filteredProducts = filterProducts(search, selectedCategory);

    return (
        <Container className="py-5 text-white">
            <h1 className="text-center mb-4">Loja de Equipamentos - Drangleic</h1>
            
            <CategoriesNav 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <SearchBar search={search} setSearch={setSearch} />
            
            <ProductList products={filteredProducts} />
        </Container>
    );
}