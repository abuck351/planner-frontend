const termMap = {
  WINTER: "Winter",
  SPRING: "Spring",
  SUM1: "Summer Session 1",
  SUM10: "Summer 10-Week",
  SUMCOM: "Summer (COM)",
  SUM2: "Summer Session 2",
  FALL: "Fall"
};

export function formatTerm(termStr) {
  let year, term;
  [year, term] = termStr.split("-");
  return `${termMap[term]} ${year}`;
}
