var fs = require("fs");

const get_cvs_data = (filePath: string) => {
  const load_data = fs.readFileSync(filePath, { encoding: "utf8" });
  const split_by_row = load_data.split("\n");
  const split_by_column = split_by_row.map((data: string) => {
    const row_data = data.replace("\r", "");
    return row_data.split(",");
  });
  const data_title: string[] = split_by_column.slice(0, 1)[0];
  const data_value: string[][] = split_by_column.slice(1);
  return data_value.map((data: string[]) => {
    const result: any = {};
    result[data_title[0]] = new Date(data[0]);
    result[data_title[1]] = data[1];
    return result;
  });
};

export { get_cvs_data };
