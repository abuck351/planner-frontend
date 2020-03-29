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

export function formatTitle(titleStr) {
  let info = {
    dept: [],
    num: 0,
    title: []
  };
  let currentInfo = info.dept;

  titleStr.split(" ").forEach(token => {
    if (currentInfo === info.dept && /\d/.test(token)) {
      info.num = token;
      currentInfo = info.title;
    } else {
      currentInfo.push(token);
    }
  });

  info.dept = info.dept.join(" ");
  info.title = info.title.join(" ");

  return info;
}
