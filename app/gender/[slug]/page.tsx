import fetchBooks from "@/app/service/get-lists";
import Pagination from "@/components/pagination";
import CardSlugLine from "./components/card-slug-list";
import CardSlugGrid from "./components/card-slug-grid";

interface SlugProps {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        list?: string;
        grid?: string;
        name?: string;
        slug?: string;
    }>
    params: { slug: string };
}

export default async function Slug({ params, searchParams }: SlugProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

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

    let response;
    try {
        response = await fetchBooks(decodedSlug);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return <h1>Erro ao carregar os dados.</h1>;
    }

    const allResults = response || [];

    const filteredResults = name
        ? allResults?.results?.books?.filter((item: { title?: string }) =>
            item?.title?.toLowerCase().includes(name)
        ) || []
        : allResults?.results?.books || [];


    const totalPages = filteredResults.length ? Math.ceil(filteredResults.length / itemsPerPage) : 1;

    const paginatedResults = filteredResults.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section>
            {list && <CardSlugLine data={paginatedResults} />}
            {grid && <CardSlugGrid data={paginatedResults} />}
            <div className="mb-10">
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
        </section>
    );
}
