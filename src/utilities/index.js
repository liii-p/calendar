export const priorityRank = (str) => {
  switch (str) {
    case "low":
      return 1;

    case "medium":
      return 2;

    case "high":
      return 3;

    case "very high":
      return 4;
  }
};
