// this returns the colors for the category display badge
export const categoryColor = (category) => {
  switch (category) {
    case "JavaScript":
      return "#fcdc00";
    case "Python":
      return "#1e73be";
    case "Design":
      return "#ff517f";
    case "Random":
      return "#f86011";
    default:
      return "#f86011";
  }
};
