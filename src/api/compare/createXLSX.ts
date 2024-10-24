import * as XLSX from "xlsx";
import { s2ab } from "@/api/compare/s2ab";

export const createXlsxFile = (data: any[][]): Blob => {
  const newWorkbook = XLSX.utils.book_new();
  const newSheet = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Results");

  const wbout = XLSX.write(newWorkbook, { bookType: "xlsx", type: "binary" });
  return new Blob([s2ab(wbout)], { type: "application/octet-stream" });
};