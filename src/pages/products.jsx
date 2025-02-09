import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Button from '../components/button';
import AddProductModal from '../components/productsmodals';
import DeleteConfirmModal from '../components/productsdeletemodal';
import Pagination from '../components/paginate';
import { fetchProductsByCategory, setCurrentCategory, addProduct, updateProduct, deleteProduct } from '../redux/productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { items, loading, error, currentCategory } = useSelector((state) => state.products);

    // Fetch products when category changes
    useEffect(() => {
        dispatch(fetchProductsByCategory(currentCategory));
    }, [currentCategory, dispatch]);

    const handleCategoryChange = (e) => {
        dispatch(setCurrentCategory(e.target.value));
    };

    // Modal States
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Modal Handlers
    const handleAddShow = () => setShowAddModal(true);
    const handleAddClose = () => setShowAddModal(false);

    const handleUpdateShow = (product) => {
        setSelectedProduct(product);
        setShowUpdateModal(true);
    };
    const handleUpdateClose = () => {
        setSelectedProduct(null);
        setShowUpdateModal(false);
    };

    const handleDeleteShow = (product) => {
        setSelectedProduct(product);
        setShowDeleteModal(true);
    };
    const handleDeleteClose = () => setShowDeleteModal(false);

    // Delete Product
    const handleDeleteProduct = async () => {
        if (!selectedProduct) return;
        
        try {
            dispatch(deleteProduct(selectedProduct.id)); // Update Redux store
            setShowDeleteModal(false);
            setSelectedProduct(null);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    // Add or Update Product
    const handleAddOrUpdateProduct = async (newProduct, productId = null) => {
        try {
            if (productId) {
                dispatch(updateProduct({ productId, updatedProduct: newProduct })); // Update Redux store
            } else {
                dispatch(addProduct(newProduct)); // Add to Redux store
            }
    
            setShowAddModal(false);
            setShowUpdateModal(false);
            setSelectedProduct(null);
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    return (
        <>
            <Navbar>
                <div className="content">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>Products</h1>
                        <Button extra={'all-btn'} onClick={handleAddShow}>Add New</Button>
                    </div>
                    <div className="box-model">
                        <h2>Josh Bakery Ventures</h2>
                        <p>62, Bode Thomas, Surulere, Lagos</p>
                    </div>
                    <div className="table-container">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <select 
                                    className="form-select d-inline-block w-auto" 
                                    value={currentCategory}
                                    onChange={handleCategoryChange}
                                >
                                    <option value="all">All Categories</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="jewelery">Jewelry</option>
                                    <option value="men's clothing">Men's Clothing</option>
                                    <option value="women's clothing">Women's Clothing</option>
                                </select>
                                {loading && <span className="ms-2">Loading...</span>}
                                {error && <span className="text-danger ms-2">{error}</span>}
                            </div>
                            <Pagination />
                        </div>
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                                            <td>{product.category}</td>
                                            <td>
                                                <Button onClick={() => handleUpdateShow(product)}>
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                            </td>
                                            <td>
                                                <Button onClick={() => handleDeleteShow(product)}>
                                                    <i className="fas fa-trash"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Navbar>

            <AddProductModal 
                show={showAddModal} 
                handleClose={handleAddClose} 
                handleAddProduct={handleAddOrUpdateProduct} 
            />
            
            {selectedProduct && (
                <>
                    <AddProductModal
                        show={showUpdateModal}
                        handleClose={handleUpdateClose}
                        productData={selectedProduct}
                        handleAddProduct={handleAddOrUpdateProduct}
                        isUpdate={true}
                    />
                    <DeleteConfirmModal
                        show={showDeleteModal}
                        handleClose={handleDeleteClose}
                        handleDelete={handleDeleteProduct}
                        product={selectedProduct}
                    />
                </>
            )}
        </>
    );
};

export default Products;
