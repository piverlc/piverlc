import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { DateProps } from "../../types/types";

const DateWrapper = ({ dateString }: DateProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateWrapper;
