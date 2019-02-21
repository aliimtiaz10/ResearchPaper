import { Paper } from './model/Paper';

export const PAPERS: Paper[] = [
    {
        id: 1, title: "Decoupling Sensor Networks", authors:
            [
                {
                    id: 1,
                    name: "Alice Abraham"
                },
                {
                    id: 2,
                    name: "Christie Chang"
                },
                {
                    id: 3,
                    name: "Bill Byron"
                },
                {
                    id: 4,
                    name: "David Deol"
                }
            ], affiliations: [
                {
                    id: 1,
                    name: "University of Utopia",
                    author_id: [1,2]
                },

                {
                    id: 2,
                    name: "Neverland Institute of Technology",
                    author_id: [2, 3]
                },
                {
                    id: 3,
                    name: "University of Argleton",
                    author_id: [4]
                }
            ]
    }
];