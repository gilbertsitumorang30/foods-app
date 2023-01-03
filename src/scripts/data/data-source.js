class DataSource {
  static searchFood(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.meals) {
          return Promise.resolve(res.meals);
        }
        return Promise.reject(`${keyword} tidak ditemukan`);
      });
  }

  static getListFood(kategori) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${kategori}`,
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.meals) {
          return Promise.resolve(res.meals);
        }
        return Promise.reject(`${keyword} tidak ditemukan`);
      });
  }

  static getDetailFood(id) {}
}

export default DataSource;
