import db from "./firebase.config";
export const fetchaccordion = async () => {
  const response = db.collection("accordion");
  const accordions = await response.get();
  accordions.docs.forEach((item) => {
    setBlogs([...accordion, item.data()]);
  });
};
