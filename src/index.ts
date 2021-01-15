import { get_cvs_data } from "./modules/get_cvs_data";
import { get_a_stock_data } from "./modules/get_a_stock_data";
const path = require("path");
const filePath = path.join(__dirname, "../inputdata/data.csv");
const cvs_data = get_cvs_data(filePath);

const main = async () => {
  await get_a_stock_data(cvs_data[0].Ticker);
  const dirty_stock_data = await Promise.all(await get_a_stock_data(cvs_data[0].Ticker));
  console.log(dirty_stock_data);
};
main();
