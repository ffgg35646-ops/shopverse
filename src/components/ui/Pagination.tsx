import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";


interface PaginationProps {

  currentPage: number;

  totalPages: number;

  onPageChange: (
    page: number
  ) => void;

}



const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) => {



  const pages = Array.from(
    {
      length: totalPages
    },
    (_, index) => index + 1
  );



  return (

    <div className="
      flex
      items-center
      justify-center
      gap-2
      mt-8
    ">


      {/* Previous */}

      <button

        disabled={
          currentPage === 1
        }

        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }

        className="
          p-2
          rounded
          border
          disabled:opacity-40
        "

      >

        <ChevronLeft size={18}/>

      </button>



      {/* Pages */}

      {pages.map(
        (page) => (

          <button

            key={page}

            onClick={() =>
              onPageChange(page)
            }

            className={`
              px-4
              py-2
              rounded
              border

              ${
                currentPage === page
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }

            `}

          >

            {page}

          </button>

        )
      )}



      {/* Next */}

      <button

        disabled={
          currentPage === totalPages
        }

        onClick={() =>
          onPageChange(
            currentPage + 1
          )
        }

        className="
          p-2
          rounded
          border
          disabled:opacity-40
        "

      >

        <ChevronRight size={18}/>

      </button>


    </div>

  );

};


export default Pagination;
