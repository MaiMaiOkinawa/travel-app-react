import speaking1 from "../assets/fruits.png";
import speaking2 from "../assets/animals.png";
import reading1 from "../assets/alphabets.png";
import reading2 from "../assets/reading.png";
import "./Category.css";
import CategoryData from "./CategoryData";

const Category = () => {
  return (
    <div className="category">
      <h1>Our Lessons</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum
        purus at mi semper, non.
      </p>

      <CategoryData
        className="speaking"
        heading="Speaking Lesson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue efficitur risus, varius feugiat ex cursus vel. Duis mi arcu, eleifend id sem ultrices, aliquet volutpat lorem. Ut malesuada, urna et semper viverra, dolor mi suscipit massa, at tincidunt libero augue eu lorem. Suspendisse suscipit vestibulum tortor, quis fringilla est varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi."
        img1={speaking1}
        img2={speaking2}
      />
      <CategoryData
        className="reading"
        heading="Reading Lesson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue efficitur risus, varius feugiat ex cursus vel. Duis mi arcu, eleifend id sem ultrices, aliquet volutpat lorem. Ut malesuada, urna et semper viverra, dolor mi suscipit massa, at tincidunt libero augue eu lorem. Suspendisse suscipit vestibulum tortor, quis fringilla est varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi."
        img1={reading1}
        img2={reading2}
      />
    </div>
  );
};

export default Category;
