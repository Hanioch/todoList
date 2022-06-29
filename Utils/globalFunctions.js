export const addNewTaskGlobal = (data, func, list) => {
  if (!data.content) {
    console.log("dd");
    return "error";
  }
  const newList = [...list, data];
  func(newList);
  return "success";
};
