import { getDailyTaskTeamLeadAPI, markPerformanceAPI } from "@/Services/allAPI";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

export default function TeamLeadDailyTask() {
  const [groupedTasks, setGroupedTasks] = useState({});
  const [selectedEmpId, setSelectedEmpId] = useState(null);
  const [selectedEmpName, setSelectedEmpName] = useState("");
  const [performanceScore, setPerformanceScore] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Function to group tasks by employee name
  const groupTasksByEmployee = (tasks) => {
    const grouped = {};
    tasks.forEach((task) => {
      const empName = task.emp.name;
      if (!grouped[empName]) {
        grouped[empName] = [];
      }
      grouped[empName].push(task);
    });
    return grouped;
  };

  const fetchTasks = async () => {
    const token = localStorage.getItem("TlToken");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const teamLeadId = userData?.id;

    const result = await getDailyTaskTeamLeadAPI(token);
    console.log(result.data);
    if (result.status === 200) {
      const filteredTasks = result.data.filter(
        (task) => task.teamlead?.id === teamLeadId
      );
  
      const grouped = groupTasksByEmployee(filteredTasks);
      setGroupedTasks(grouped);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = true;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="wrapper p-6">
      <h3 className="text-3xl font-bold text-center text-primary mb-8">All Tasks</h3>

      {Object.entries(groupedTasks).map(([empName, tasks]) => (
        <div key={empName} className="mb-10">
          <h2 className="text-2xl font-semibold capitalize mb-2">{empName}&apos;s Tasks</h2>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start gap-2">
                <Checkbox id={`task-${task.id}`} checked={task.is_completed} />
                <div>
                  <Label htmlFor={`task-${task.id}`} className="text-md font-medium">
                    {task.task}
                  </Label>
                </div>
                {task.is_completed && task.file && task.file !== "/null" && (
                  <button
                    onClick={() => handleDownload(`http://127.0.0.1:8000${task.file}`)}
                    className="ml-2"
                  >
                    <FaEye className="text-blue-500" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}