import Filters from './Filters';

export default function NestedLayoutPosts({ children }) {
  return (
    <section className="m-3 mt-0 mainSection">
      <div className="d-flex main-container w-100 justify-content-between">
        <Filters />
        <div className="d-flex flex-column posts-container">{children}</div>
      </div>
    </section>
  );
}
