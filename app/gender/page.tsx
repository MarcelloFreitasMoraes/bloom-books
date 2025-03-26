import GenderLine from "./components/card-gender-line";
import fetchGender from "../service/get-gender";
import Pagination from "@/components/pagination";
import GenderGrid from "./components/card-gender-grid";

interface GenderPageProps {
  searchParams: Promise<{
    page: string
    limit: string
    list: string
    grid: string
    name?: string
  }>
}

const GenderPage = async ({ searchParams }: GenderPageProps) => {
  const currentPage = searchParams && typeof (await searchParams).page === "string" ? Number((await searchParams).page) : 1;
  const itemsPerPage = searchParams && typeof (await searchParams).limit === "string" ? Number((await searchParams).limit) : 5;
  const name =
    searchParams && typeof (await searchParams).name === "string"
      ? (await searchParams).name?.toLowerCase() ?? ""
    : "";
  const grid = searchParams && typeof (await searchParams).grid === "string"
    ? (await searchParams).grid === "true"
    : false;
  
  const list = searchParams && typeof (await searchParams).list === "string"
    ? (await searchParams).list === "true"
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

  const url = `page=${1}&limit=${5}&list=${list}&grid=${grid}`

  return (
    <div>
      {list && <GenderLine data={paginatedResults} url={url} />}
      {grid && <GenderGrid data={paginatedResults} url={url} />}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default GenderPage;
