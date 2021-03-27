import { parse, format } from "date-fns";

export const getFormatedDate = (dateString) => {
  // dateString: 2021-03-12T14:40:54Z
  // parse()の構文: parse(dateString, formatString, referenceDate, [options])
  // format()の構文: format(date, format, [options]);
  const parsedDate = parse(dateString, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  return format(parsedDate, "yyyy-MM-dd");
};

export const validateRequired = (value, errorMessage) => {
  return value === "" ? errorMessage : "";
};
