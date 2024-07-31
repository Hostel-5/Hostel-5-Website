import * as XLSX from "xlsx";

export const getSheet = async (sheetName) => {
  let response = await fetch(
    "https://docs.google.com/spreadsheets/d/135ptqes_OVA7lMmHE_CFhx-nUYkrPibVtlqj4VbLkgw/export?format=xlsx"
  );

  if (!response.ok) {
    const responseBody = await response.json();
    throw new Error(responseBody.message);
  }

  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });

  const sheet = workbook.Sheets[sheetName];

  const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 0 });

  return sheetData;
};
