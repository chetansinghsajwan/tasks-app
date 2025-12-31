import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { useNavigate } from "react-router";

const tasks = [
    {
        id: 1,
        name: "Design new homepage",
        status: "In Progress",
    },
    {
        id: 2,
        name: "Fix login bug",
        status: "Completed",
    },
    {
        id: 3,
        name: "Update user profile page",
        status: "Pending",
    },
]

export function TasksPage() {

    const navigate = useNavigate()

    function TaskCard(task: any) {
        return (
            <TableRow
                onClick={() => navigate(`/task/${task.id}`)}
                className="border-none"
            >
                <TableCell className="flex px-4 py-6 bg-card rounded-lg">
                    {task.name}
                </TableCell>
            </TableRow>
        )
    }


    return (
        <>
            <div className="flex flex-row justify-center items-center p-2 h-25 text-3xl font-semibold">
                Tasks
            </div>
            <div className="px-4 py-4">
                <Table>
                    <TableBody className="flex flex-col gap-y-2">
                        {
                            tasks.map(TaskCard)
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}