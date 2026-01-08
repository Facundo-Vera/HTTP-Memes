
const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li>
          <a className="relative block rounded px-3 py-1.5 text-sm hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700">
            1
          </a>
        </li>

        <li aria-current="page">
          <a className="relative block rounded px-3 py-1.5 text-sm font-bold bg-neutral-100 dark:bg-neutral-700 dark:text-white">
            2
          </a>
        </li>

        <li>
          <a className="relative block rounded px-3 py-1.5 text-sm hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700">
            3
          </a>
        </li>

        <li>
          <a
            className="relative block rounded px-3 py-1.5 text-sm hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
