import { WineData } from "../custom-hook/useGetWinePrices/type";

export const sortWineByName = (wineData: WineData[]) =>
  wineData.sort((a, b) => a.product_name.localeCompare(b.product_name));
