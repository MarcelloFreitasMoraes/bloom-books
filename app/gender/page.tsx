import GenderLine from "./components/card-gender-line";
import fetchGender from "../service/get-gender";
import Pagination from "@/components/pagination";
import GenderGrid from "./components/card-gender-grid";

// interface GenderPageProps {
//   searchParams: Promise<{
//     page: string
//     limit: string
//     list: string
//     grid: string
//     name?: string
//   }>
// }

interface GenderPageProps {
  searchParams: {
    page?: string;
    limit?: string;
    list?: string;
    grid?: string;
    name?: string;
  };
}

const GenderPage = async ({ searchParams }: GenderPageProps) => {
  const currentPage = searchParams && typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const itemsPerPage = searchParams && typeof searchParams.limit === "string" ? Number(searchParams.limit) : 5;
  const name =
  searchParams && typeof searchParams.name === "string"
    ? searchParams.name?.toLowerCase() ?? ""
    : "";
    const grid = searchParams && typeof searchParams.grid === "string"
    ? searchParams.grid === "true"
    : false;
  
  const list = searchParams && typeof searchParams.list === "string"
    ? searchParams.list === "true"
    : false;  

   const response = await fetchGender();
   const allResults = response.results || [];
 
   const filteredResults = name
     ? allResults.filter((item: { list_name?: string }) =>
         item.list_name?.toLowerCase().includes(name)
       )
     : allResults;
 
   const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
   const paginatedResults = filteredResults.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );

  return (
    <div>
      {list && <GenderLine data={paginatedResults} />}
      {grid && <GenderGrid data={paginatedResults} />}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default GenderPage;
