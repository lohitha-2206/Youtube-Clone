export const API_KEY = "AIzaSyCGy1vNM_W0jb_mx5hPY9ehiXZ_0dfeN5Y";

export const value_converter = (value) => {
  if (!value) return "0"; // protect against undefined/null

  value = Number(value); // force it to number
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M"; // 1 decimal place
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "K"; // 1 decimal place
  } else {
    return value.toString();
  }
};