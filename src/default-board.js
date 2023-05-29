import { uuid } from "./utils";

export default {
    name: "Workshop",
    columns: [
        {
            name: "todo",
            tasks: [
                {
                    description: "",
                    name: "first task",
                    id: uuid(),
                    userAssigned: null,
                },
                {
                    description: "",
                    name: "second task",
                    id: uuid(),
                    userAssigned: null,
                },
                {
                    description: "",
                    name: "third task",
                    id: uuid(),
                    userAssigned: null,
                },
            ],
        },
        {
            name: "in progress",
            tasks: [
                {
                    description: "",
                    name: "fourth task",
                    id: uuid(),
                    userAssigned: null,
                },
                {
                    description: "",
                    name: "fifth task",
                    id: uuid(),
                    userAssigned: null,
                },
                {
                    description: "",
                    name: "sixth task",
                    id: uuid(),
                    userAssigned: null,
                },
            ],
        },
    ],
};
