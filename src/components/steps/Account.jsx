import { useStepper } from "../../context/StepperContext";
import { Input } from "../Input";

export const Account = () => {
  const { userData, setUserData } = useStepper();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col tabs__content step_box">
      <div className="mb-5">
        <Input
          type="text"
          text="Username"
          name="username"
          value={userData["username"] || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="password"
          text="Password"
          name="password"
          value={userData["password"] || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
