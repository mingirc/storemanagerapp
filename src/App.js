import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
    HomeNav, 
    Reports, 
    ReportSales, 
    ReportInventory, 
    InventoryManagement, 
    CategoryManagement, 
    ProductManagement, 
        } from './pages';
import Cashier from './pages/cashier/Cashier';
import Auth from './auth';
import { Container } from '@mui/material';
import Footer from './components/Footer';

const App = () => {
    return (
        <Container style={{ backgroundColor: 'white', minHeight: '100vh', marginTop: '0', overflowX: 'hidden' }}>
            <BrowserRouter>
            {/* Auth component used as a renderProp component. if signed in children will appear. */}
            <Auth>
                {() => (
                <Routes>
                    <Route path="/" >
                        <Route index element={<HomeNav />} />
                        <Route path="/cashier" exact element={<Cashier />} />
                        <Route path="/inventorymanagement">
                            <Route index element={<InventoryManagement />}/>
                            <Route path="categorymanagement">
                                <Route index element={<CategoryManagement />} />
                                <Route path=":action" element={<CategoryManagement />}/>
                                <Route path="edit/:editCategoryId" element={<CategoryManagement />}/>
                                <Route path="delete/:deleteCategoryId" element={<CategoryManagement />}/>
                            </Route>
                            <Route path="productmanagement">
                                <Route index element={<ProductManagement />} />
                                <Route path=":action" element={<ProductManagement />}/>
                                <Route path="edit/:editProductId" element={<ProductManagement />}/>
                                <Route path="delete/:deleteProductId" element={<ProductManagement />}/>
                            </Route>
                        </Route>
                        <Route path="/reports"> 
                            <Route index element={<Reports />} />
                            <Route path="sales" element={<ReportSales />} />
                            <Route path="sales/:salesId" element={<ReportSales />} />
                            <Route path="inventory" element={<ReportInventory />} />
                        </Route>
                    </Route>
                    </Routes>
                    )}
                </Auth>
            </BrowserRouter>
            <Footer />
        </Container>
    )
}

export default App;