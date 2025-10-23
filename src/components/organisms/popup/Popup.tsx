import { useEffect, useState } from "react";

type Trainee = {
  Id: number;
  firstname: string;
  lastname: string;
  address: string;
};

type PopupFormProps = {
  onClose: () => void;
  trainee: Trainee | null;
};

const PopupForm: React.FC<PopupFormProps> = ({ onClose, trainee }) => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLasrName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if (trainee) {
      setFirstName(trainee.firstname);
      setLasrName(trainee.lastname);
      setAddress(trainee.address);
    } else {
      setFirstName("");
      setLasrName("");
      setAddress("");
    }
  }, [trainee]);

  const fetchData = async () => {
    const payload = {
      firstname,
      lastname,
      address,
    };

    const response = await fetch(
      trainee
        ? `http://localhost:8006/Task_02/trainee?id=${trainee.Id}`
        : "http://localhost:8006/Task_02/trainee",
      {
        method: trainee ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  const onSubmit = () => {
    fetchData();
    onClose();
  };

  return (
    <div className="form-container">
      <div className="add-form">
        <h2>Add Form</h2>

        <label htmlFor="firstname">firstname</label>
        <input
          id="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br />

        <label htmlFor="lastname">lastname</label>
        <input
          id="lastname"
          type="email"
          value={lastname}
          onChange={(e) => setLasrName(e.target.value)}
        />

        <br />

        <label htmlFor="address">address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PopupForm;
