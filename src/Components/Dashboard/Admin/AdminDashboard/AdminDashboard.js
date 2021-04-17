import React from 'react';
import { useParams } from 'react-router-dom';
import './AdminDashboard.css';
import DashboardHeader from '../../DashboardShared/DashboardHeader/DashboardHeader';

import AddService from '../AddService/AddService';
import OrderList from '../OrderList/OrderList';
import ManageService from '../ManageService/ManageService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

function AdminDashboard() {
	const { destination } = useParams();

	return (
		<div className='AdminDashboard'>
			<DashboardHeader />
			{
				destination === 'orderList' && <OrderList />
			}
			{
				destination === 'addService' && <AddService />
			}
			{
				destination === 'manageService' && <ManageService />
			}
			{
				destination === 'makeAdmin' && <MakeAdmin />
			}
		</div>
	)
}

export default AdminDashboard;
/*
			{
				adminDestination === 'addProduct' && <AddProduct />
			}
			{
				adminDestination === 'productList' && <ProductList />
			}
*/