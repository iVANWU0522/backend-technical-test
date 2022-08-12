import * as Papaparse from 'papaparse';
import * as _ from 'lodash';

import { CsvHeader } from './enums/csv-header.enum';

export const task4 = (transformedData: Record<string, Record<string, string[]>>): any => {
    console.log(`This is task 4`);
    // Write your code here, you can use any external libraries from npm
    const fields = [
        CsvHeader.YEAR,
        CsvHeader.SUBJECT,
        CsvHeader.LESSON,
    ]

    const data = [] as any[];
    Object.entries(transformedData).map(([year, subjects]) => {
        Object.entries(subjects).map(([subject, lessons]) => {
            lessons.map((lesson) => {
                data.push([
                    year,
                    subject,
                    lesson,
                ])
            });
        });
    });
    
    const csv = Papaparse.unparse({
        fields,
        data,
    });

    return csv;
}