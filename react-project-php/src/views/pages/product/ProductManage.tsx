import { Link } from "react-router";
import { useEffect, useState } from "react";
import PageHeading from "../../../components/PageHeading.tsx";
import { api, basePath } from "../../../config.ts";
import type { Product } from "../../../interfaces/Product.ts";

function ProductManage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [deleteItem, setDeleteItem] = useState({ id: 0, name: "" });
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  const getProducts = () => {
    api
      .get("products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  function handleDelete(id: number) {
    // api.delete("user-delete?id=" + id)
    // .then((res) => {
    //   if(res.status == 200){
    //     getUsers();
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading icon="box-seam" subtitle="Management" title="Products">
            <Link to="/product-create" className="btn btn-primary">
              <i className="bi bi-plus-lg me-1"></i> Add New
            </Link>
          </PageHeading>

          <section className="row g-3 mt-1" aria-label="Product summary">
            <div className="col-12">
              <article className="metric-card metric-primary">
                <div className="metric-top">
                  <span className="metric-label">Total Product</span>
                  <span className="metric-icon">
                    <i className="bi bi-box-seam" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="metric-value">{products.length}</div>
              </article>
            </div>
          </section>

          <section className="panel mt-3">
            {msg && (
              <div
                className={`alert alert-${success ? "success" : "danger"} alert-dismissible fade show mb-3`}
                role="alert"
              >
                {success
                  ? "Data updated successfully!"
                  : "Something went wrong! Please try again after some time."}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() => setMsg(false)}
                ></button>
              </div>
            )}
            <div className="table-responsive">
              <table
                className="table align-middle mb-0"
                id="usersTable"
                data-searchable-table=""
              >
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Category</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">QTY</th>
                    <th scope="col" className="text-end">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        {(item.image_path != null && item.image_path != "") && (
                          <img
                            src={basePath + item.image_path} width={50} height={50} className="mb-2 rounded" alt={item.name} loading="lazy" />
                        )}
                        <br />
                        {item.name}
                      </td>
                      <td>{item.category}</td>
                      <td>{item.brand}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <div className="d-flex gap-1 justify-content-end">
                          <Link
                            to={`/product-details/${item.id}`}
                            className="btn btn-sm btn-outline-success"
                          >
                            <i className="bi bi-eye"></i>
                          </Link>
                          <Link
                            to={"/product-edit/" + item.id}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Link>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              setDeleteItem({
                                id: Number(item.id),
                                name: item.name,
                              })
                            }
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-3">
              <p className="text-muted small mb-0">
                Showing 1 to 5 of 124 users
              </p>
              <nav aria-label="Users pagination">
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </section>
        </div>
      </main>
      {/* Modal */}
      <div className="modal fade" id="deleteModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-center fs-5">Delete User</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <span className="badge border border-danger text-danger fs-5">
                User: {deleteItem.name}
              </span>
              <h3 className="mt-3">Are you sure?</h3>
              <p>Do you want to delete this user?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(deleteItem.id)}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductManage;
