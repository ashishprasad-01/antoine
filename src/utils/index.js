const sortByName = (products, type = "ASC") => {
  console.log(products);
  if (type === "ASC") {
    products?.sort((x, y) => {
      let a = x.title.toUpperCase(),
        b = y.title.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }

  if (type === "DESC") {
    products?.sort((x, y) => {
      let a = x.title.toUpperCase(),
        b = y.title.toUpperCase();
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
};

const sortByPrice = (products, type = "ASC") => {
  console.log(products);
  if (type === "ASC") {
    products?.sort(function (x, y) {
      return x.price - y.price;
    });
  }
  if (type === "DESC") {
    products?.sort(function (x, y) {
      return y.price - x.price;
    });
  }
};

export { sortByName, sortByPrice };
