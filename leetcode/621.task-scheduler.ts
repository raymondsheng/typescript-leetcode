/*
 * @lc app=leetcode id=621 lang=typescript
 *
 * [621] Task Scheduler
 */

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// @lc code=start
function leastInterval(tasks: string[], n: number): number {
  let time = 0;

  const taskFreq: { [task: string]: number } = {};
  for (const task of tasks) taskFreq[task] = (taskFreq[task] ?? 0) + 1;

  const maxHeap = new MaxPriorityQueue({ priority: (taskFreq) => taskFreq[1] });
  for (const [task, freq] of Object.entries(taskFreq))
    maxHeap.enqueue([task, freq]);

  while (maxHeap.size()) {
    let cycle = [];
    for (let i = 0; i < n + 1; i++)
      // @ts-ignore
      if (maxHeap.size()) cycle.push(maxHeap.dequeue().element);

    for (const [task, freq] of cycle)
      if (freq - 1) maxHeap.enqueue([task, freq - 1]);

    if (maxHeap.size()) time += n + 1;
    else time += cycle.length;
  }

  return time;
}
// @lc code=end
