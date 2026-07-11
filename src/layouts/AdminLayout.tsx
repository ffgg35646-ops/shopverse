import { Outlet } from "react-router-dom";


const AdminLayout = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <aside className="w-64 bg-white border-r p-5">

        <h2 className="text-xl font-bold mb-6">
          Shopverse Admin
        </h2>


        <nav className="space-y-3">

          <a href="/admin">
            Dashboard
          </a>

          <a href="/admin/products">
            Products
          </a>

          <a href="/admin/orders">
            Orders
          </a>

          <a href="/admin/users">
            Customers
          </a>

        </nav>

      </aside>


      <main className="flex-1 p-6">

        <Outlet />

      </main>

    </div>
  );

};


export default AdminLayout;
