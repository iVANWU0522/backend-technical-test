import { task2 } from './task2';
import { task3 } from './task3';
import { task4 } from './task4';
import { task5 } from './task5';

export const task1 = async (): Promise<any> => {
  console.log(`This is task 1`);
  // Write your code here, you can use any external libraries from npm
  const response = await task2();
  const contentBrowser = response.data.data.contentBrowser;

  const transformedContentBrowser = task3(contentBrowser);
  const csv = task4(transformedContentBrowser);
  await task5(csv);
}