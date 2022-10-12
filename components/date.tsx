import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
