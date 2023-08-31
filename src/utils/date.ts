export const dateFormat = (date: Date, dateStyle: "full" | "long" | "medium" | "short" | undefined) => {
  return new Intl.DateTimeFormat("ko", { dateStyle }).format(date);
};
