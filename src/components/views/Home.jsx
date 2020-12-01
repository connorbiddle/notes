import { useContext } from "react";
import Card from "../presentational/Card";
import { SmallText } from "../presentational/Typography";
import TitleBar from "../TitleBar";
import { RoutinesContext } from "../../RoutinesContext";

const Home = () => {
  const routines = useContext(RoutinesContext);

  return (
    <section>
      <TitleBar />
      <Card>
        {routines.map(({ id, title }) => (
          <div key={id}>
            <SmallText>{title}</SmallText>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default Home;
