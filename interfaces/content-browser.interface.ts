export interface Subject {
    id: string;
    name: string;
}

export interface Year {
    id: string;
    name: string;
}

export interface Lesson {
    id: string;
    name: string;
    subjects: Subject[];
    years: Year[];
}

export interface Unit {
    name: string;
    lessons: Lesson[];
}

export interface Topic {
    name: string;
    units: Unit[];
}

export interface ContentBrowser {
    topics: Topic[];
}