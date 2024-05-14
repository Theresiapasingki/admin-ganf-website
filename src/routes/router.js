import { createBrowserRouter } from 'react-router-dom';
import {
  Dashboard,
  ProductsAdd,
  ProductEdit,
  Products,
  Promotion,
  PromotionAdd,
  PromotionEdit,
  SettingsEdit,
  Settings,
  Logout
} from '../pages';

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/addproduct', element: <ProductsAdd /> },
  { path: '/editproduct', element: <ProductEdit /> },
  { path: '/product', element: <Products /> },
  { path: '/promotion', element: <Promotion /> },
  { path: '/addpromotion', element: <PromotionAdd /> },
  { path: '/editpromotion', element: <PromotionEdit /> },
  { path: '/editsettings', element: <SettingsEdit /> },
  { path: '/settings', element: <Settings /> },
  { path: '/logout', element: <Logout /> },
]);
