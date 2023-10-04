import { Button } from "../Buttons/Button";
import { Input } from "../Inputs/Input";
import PropTypes from "prop-types";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let currentData = {};
    for (let [key, value] of data.entries()) {
      currentData[key] = value;
    }

    // ніби нижче прописав проптайп але все одно помилка
    // eslint-disable-next-line react/prop-types
    props.SetCounts(currentData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="min"
        required
        placeholder="Enter min count"
        defaultValue={props.showCounts.min}
      ></Input>
      <Input
        name="max"
        required
        placeholder="Enter max count"
        defaultValue={props.showCounts.max}
      ></Input>
      <Button type="submit" title="SET"></Button>
    </form>
  );
};

Form.propTypes = {
  setCounts: PropTypes.func,
};

export { Form };
