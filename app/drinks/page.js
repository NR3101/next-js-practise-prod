import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  //throwing error
  if (!res.ok) {
    throw new Error("Failed to fetch drinks....");
  }
  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
