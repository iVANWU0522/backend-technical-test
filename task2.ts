import axios from 'axios';

import { Response } from './interfaces/response.interface';

export const task2 = async (): Promise<Response> => {
    console.log(`This is task 2`);
    // Write your code here, you can use any external libraries from npm
    const response = await axios.post('https://api2.inquisitive.com/latest/graphql', {
        "operationName": "ContentBrowser",
        "query": "query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}",
        "variables": {
            "input": {
                "years": ["1", "2", "3", "4"],
                "subjects": ["history", "science-and-technology", "english", "maths"],
                "curriculums": [],
                "includingDraft": false,
                "includingComingSoon": false,
                "includingFuture": false,
                "includingEmptyTopic": false,
                "initialTopics": 10,
                "topicIds": []
            }
        }
    });

    return response;
};