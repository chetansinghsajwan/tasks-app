import { Button } from "@/components/ui/button";
import { useParams } from "react-router";

export function TaskPage() {

    const params = useParams()

    const taskID = params.id as string
    if (taskID === undefined) {
        return null
    }

    function fetchTaskData(id: string) {
        console.log(`Fetching data for task ID: ${id}`);

        if (taskID === "1") {
            return {
                id: "1",
                name: "Sample Task",
                description: "This is a sample task description.",
            }
        }

        return undefined
    }

    const taskData = fetchTaskData(taskID)

    if (!taskData) {
        return <div>Task not found</div>;
    }

    return <>
        <div className="bg-card">
            <div className="flex flex-row justify-between">
                <Button variant="ghost" className="m-4">Back</Button>
                <Button variant="ghost" className="m-4">Edit</Button>
            </div>
            <div className="flex flex-row justify-center items-center text-center h-60 text-2xl">
                {taskData.name}
            </div>
            <div className="relative flex flex-row justify-center top-6">
                <Button variant="ghost" className="bg-green-500 min-w-50 min-h-12 rounded-4xl text-lg">Complete</Button>
            </div>
        </div>
        <div>
            <div className="my-11 mx-5">
                <div className="text-lg pb-3">
                    Description
                </div>
                {taskData.description}
            </div>
        </div>
    </>
}
