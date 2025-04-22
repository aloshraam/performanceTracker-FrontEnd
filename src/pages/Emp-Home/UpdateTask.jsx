import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Input, Option, Select } from "@material-tailwind/react";

function UpdateTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [performance_level, setPerformance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("Emp-token");
  const { id } = useParams();

  const taskUpdate = async () => {
    try {
      if (name === "completed") {
        // Call mark_complete endpoint
        const res = await axios.post(
          `http://127.0.0.1:8000/empapi/taskchart/${id}/mark_complete/`,
          {},
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
      } else {
        // Regular task update
        await axios.post(
          `http://127.0.0.1:8000/empapi/taskchart/${id}/taskupdates_add/`,
          {
            name,
            description,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
      }
  
      Swal.fire({
        icon: "success",
        title: "Task Updated",
        text: "The task has been updated successfully.",
      }).then(() => {
        navigate("/task-chart");
      });
  
    } catch (error) {
      console.error("Update error:", error);
      setErrorMessage("Task update failed.");
    }
  };  

  const handleUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    await taskUpdate();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Update Task
        </h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <Input
              label="Stage"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <Select
              label="Status"
              value={name}
              onChange={(val) => setName(val)}
            >
              <Option value="In progress">In progress</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
