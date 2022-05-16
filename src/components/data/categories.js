const categories = [
   {
      categoriesId: "ice-cream",
      title: "Ice-cream",
   },
   {
      categoriesId: "accessories",
      title: "Accessories",
   },
];

export function getCategories() {
   return categories;
}

export function getCategory(categoryId) {
   return categories[
      categories.findIndex(
         category => category.categoriesId === categoryId
      )
   ];
}