import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../constants/Button";
import Sidebar from "../constants/Sidebar";
import Card from "../constants/Card";
import { IoMdPersonAdd } from "react-icons/io";
import notFound from "../../Components/assets/notFound.svg";

const Contacts:React.FC  = () => {
  // Get contacts from the Redux store
  const contacts = useSelector((state: any) => state.contacts);
  const navigate = useNavigate();

  return (
    <div className="flex lg:flex-row flex-col bg-navy min-h-screen text-white">
      <Sidebar />
      <div className="flex flex-col lg:flex-1 p-5">
        <div className="flex justify-between items-center w-11/12 mb-5">
          <span className="text-4xl font-bold">Contacts</span>
          <Button
            text="Create Contact"
            onClick={() => {
              navigate("/contacts/create");
            }}
            Icon={IoMdPersonAdd}
            className="bg-navy-light text-white"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:m-0 m-5">
          {contacts?.items?.length > 0 ? (
            // Render list of contacts if there are any
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
              {contacts.items.map((item: any) => (
                <Card details={item} key={item?.id} />
              ))}
            </div>
          ) : (
            // Display message if no contacts are available
            <div className="mt-10 border border-navy-light p-5 rounded flex items-center gap-5">
              <img
                className="w-[56px] h-[56px]"
                src={notFound}
                alt="Not Found"
              />
              <p className="text-start text-navy-light font-medium">
                No contacts found!
                <br />
                Please add contact from <br /> Create Contact Button
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
