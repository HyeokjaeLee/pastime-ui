const yahooStockPrices = require("yahoo-stock-prices");
const error_ticker: string[] = [];

interface A_stock_data {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

const get_a_stock_data = async (ticker: string, start_date?: Date, end_date?: Date) => {
  try {
    const date_arr = (date_str: Date) => {
      const date = date_str;
      return { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
    };
    //날짜 안받을경우
    let start_date_arr;
    if (start_date != undefined) {
      start_date_arr = date_arr(start_date);
    } else {
      start_date_arr = { year: 0, month: 0, day: 0 };
    }
    let end_date_arr;
    if (end_date != undefined) {
      end_date_arr = date_arr(end_date);
    } else {
      end_date_arr = date_arr(new Date());
    }
    const stock_original_data = await yahooStockPrices.getHistoricalPrices(
      start_date_arr.month,
      start_date_arr.day,
      start_date_arr.year,
      end_date_arr.month,
      end_date_arr.day,
      end_date_arr.year,
      ticker,
      "1d",
    );
    const stock_processed_data = stock_original_data
      .map((data: any) => {
        if (data.open != null && data.high != null && data.low != null && data.close != null) {
          const date = new Date("1970-1-1");
          date.setSeconds(date.getSeconds() + data.date);
          const result: A_stock_data = {
            date: date,
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
          };
          return result;
        }
      })
      .filter((data: A_stock_data) => {
        return data !== undefined;
      });
    stock_processed_data.unshift(ticker);
    const data_length = stock_processed_data.length;
    if (stock_processed_data[data_length - 1] == ticker) {
      error_ticker.push(ticker);
    } else {
      return stock_processed_data;
    }
  } catch (e) {
    error_ticker.push(ticker);
  }
};
export { get_a_stock_data };
