import * as _ from 'lodash';

import { ContentBrowser } from "./interfaces/content-browser.interface";

export const task3 = (contentBrowser: ContentBrowser): Record<string, Record<string, string[]>> => {
    console.log(`This is task 3`);
    // Write your code here, you can use any external libraries from npm
    const units = _.flatMap(contentBrowser.topics, (topic) => topic.units);
    
    const lessons = _.flatMap(units, (unit) => unit.lessons);

    const transformedLessons = _.map(lessons, (lesson) => {
        return {
            [lesson.years[0].name]: {
                [lesson.subjects[0].name]: lesson.name
            }
        };
    });
    
    const groupedByYearAndSubject = transformedLessons.reduce((result, lesson) => {
        let prev = result;
        const year = Object.keys(lesson)[0];
        const subject = Object.keys(lesson[year])[0];

        if (!prev[year]) {
            prev[year] = {
                [subject]: [lesson[year][subject]],
            };
            return prev;
        }

        if (!prev[year][subject]) {
            prev[year][subject] = [lesson[year][subject]];
            return prev;
        }


        prev[year][subject].push(lesson[year][subject]);

        return prev;
    }, {} as Record<string, Record<string, string[]>>);

    console.log(groupedByYearAndSubject);

    return groupedByYearAndSubject;
};
