import { useEffect, useState } from "react";
import PopupForm from "../../components/organisms/popup/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


interface HomepageProps {
  Id: number;
  firstname: string;
  lastname: string;
  address: string;
}

const Homepage = () => {
  const [data, setData] = useState<HomepageProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState<HomepageProps | null>(
    null
  );

  const handlePopupOpen = () => {
    setSelectedTrainee(null);
    setIsOpen(true);
  };

  const handlePopupClose = () => {
    setIsOpen(false);
  };

  const getFetchData = async () => {
    const response = await fetch("http://localhost:8006/Task_02/trainee", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();
    setData(responseData);
  };

  console.log(data);

  const handleEdit = (trainee: HomepageProps) => {
    setSelectedTrainee(trainee);
    setIsOpen(true);
  };

  useEffect(() => {
    getFetchData();
  }, [isOpen]);

  const deleteTrainee = async (id: number) => {
    console.log(id);

    if(id){
        try{
            const response = await fetch(`http://localhost:8006/Task_02/trainee/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
        }
        );
        const data = await response.json();
        console.log(data);
        }catch(error){
            console.error("Error deleting trainee:", error);
        }
    }
  };

  return (
    
      <div className="main_container">
        <h2>Trainee Management</h2>
        <div className="add_btn">
          <button onClick={handlePopupOpen}>+ Add</button>
        </div>

        {isOpen && (
          <PopupForm onClose={handlePopupClose} trainee={selectedTrainee} />
        )}

        <div className="table_container">
          <table className="table_container">
            <thead>
              <tr>
                <th>ID</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>address</th>
               <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.Id}>
                  <td>{item.Id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.address}</td>
                  <td>
                    <div className="action_icons">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="edit-icon"
                        onClick={() => handleEdit(item)}
                      />
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="delete-icon"
                        onClick={() => deleteTrainee(item.Id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};

export default Homepage;
