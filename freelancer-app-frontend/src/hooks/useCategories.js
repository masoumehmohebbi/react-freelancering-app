import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";
const useCategories = () => {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { category: rawCategories = [] } = data || {};
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  return { isPending, categories, transformedCategories };
};
export default useCategories;
