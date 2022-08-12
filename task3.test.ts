import { task3 } from './task3';

const mockContentBrowser = {
    topics: [
        {
            name: 'Past and Present Family Life',
            units: [
                {
                    name: 'Past, Present and Future',
                    lessons: [
                        {
                            id: '207',
                            name: 'Special Days',
                            subjects: [
                                {
                                    id: '2',
                                    name: 'history'
                                }
                            ],
                            years: [
                                {
                                    id: '2',
                                    name: '1'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Family Life',
                    lessons: [
                        {
                            id: '243',
                            name: 'Family Roles',
                            subjects: [
                                {
                                    id: '2',
                                    name: 'history'
                                }
                            ],
                            years: [
                                {
                                    id: '2',
                                    name: '1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

test('task3 should group lessons by year and subject', () => {
    expect(task3(mockContentBrowser)).toEqual({
        1: {
            history: ['Special Days', 'Family Roles']
        },
    });
});