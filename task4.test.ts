import { task4 } from './task4';

const mockTransformedData = {
    1: {
        history: ['Special Days', 'Family Roles']
    },
};

test('task4 should export csvs', () => {
    expect(task4(mockTransformedData)).toEqual('year,subject,lesson\r\n1,history,Special Days\r\n1,history,Family Roles');
});