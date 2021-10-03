/*
 * @lc app=leetcode id=332 lang=typescript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
function findItinerary(tickets: string[][]): string[] {
  const flights: { [origin: string]: string[] } = {};
  const itinerary: string[] = [];

  for (const [origin, destination] of tickets) {
    if (!(origin in flights)) flights[origin] = [destination];
    else flights[origin].push(destination);
  }

  for (const origin in flights) {
    flights[origin].sort().reverse();
  }

  dfs("JFK", flights, itinerary);

  return itinerary.reverse();
}

function dfs(
  origin: string,
  flights: { [origin: string]: string[] },
  itinerary: string[]
) {
  const destinations = flights[origin];
  while (destinations && destinations.length) {
    dfs(destinations.pop(), flights, itinerary);
  }
  itinerary.push(origin);
}

// @lc code=end
