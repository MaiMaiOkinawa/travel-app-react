import "./Goal.css";
import GoalData from "./GoalData";
import Goal1 from "../assets/goal.png";
import Goal2 from "../assets/time.png";
import Goal3 from "../assets/study.png";

function Goal() {
  return (
    <div className="goal">
      <h1>Our Goals</h1>
      <p>
        Maecenas laoreet nunc ut tincidunt consectetur. Maecenas ipsum velit,
        sagittis id est ac, mattis bibendum dui.
      </p>
      <div className="goal-content">
        <GoalData
          image={Goal1}
          heading="Indivisual Goal Setting"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue efficitur risus, varius feugiat ex cursus vel. Duis mi arcu, eleifend id sem ultrices, aliquet volutpat lorem. Ut malesuada, urna et semper viverra, dolor mi suscipit massa, at tincidunt libero augue eu lorem. Suspendisse suscipit vestibulum tortor, quis fringilla est varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />

        <GoalData
          image={Goal2}
          heading="Short Time"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue efficitur risus, varius feugiat ex cursus vel. Duis mi arcu, eleifend id sem ultrices, aliquet volutpat lorem. Ut malesuada, urna et semper viverra, dolor mi suscipit massa, at tincidunt libero augue eu lorem. Suspendisse suscipit vestibulum tortor, quis fringilla est varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />

        <GoalData
          image={Goal3}
          heading="Self-Learning"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue efficitur risus, varius feugiat ex cursus vel. Duis mi arcu, eleifend id sem ultrices, aliquet volutpat lorem. Ut malesuada, urna et semper viverra, dolor mi suscipit massa, at tincidunt libero augue eu lorem. Suspendisse suscipit vestibulum tortor, quis fringilla est varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        />
      </div>
    </div>
  );
}

export default Goal;
