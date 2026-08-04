import { Link } from "react-router";
import { useEffect, useState } from "react";
import PageHeading from "../../../components/PageHeading.tsx";
import { defaultPost } from "../../../interfaces/Post.ts";
import type { Post } from "../../../interfaces/Post.ts";

function PostCreate() {
  const [post, setPost] = useState<Post>(defaultPost);
  function handleSubmit(){
  }

  return (
    <>
      <main className="dashboard-content">
        <div className="container-fluid px-3 px-lg-4 py-4">
          <PageHeading
            icon="person-plus"
            subtitle="Management"
            title="Add Post"
          >
            <Link className="btn btn-outline-secondary btn-sm" to="/Post">
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to
              List
            </Link>
          </PageHeading>

          <section className="row g-3">
            <div className="col-12">
              <form className="panel needs-validation">
                <input
                      type="hidden"
                      value={post.userId}
                    />
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">
                      Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={post.title}
                      onChange={(e)=>setPost({...post,title:e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Body
                    </label>
                    <textarea className="form-control" onChange={(e)=>setPost({...post,body:e.target.value})}>{post.body}</textarea>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-end gap-2 mt-4">
                  <button className="btn btn-outline-secondary" type="reset">
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default PostCreate;
