function solve(nums, div) {
  let result = [];
  for (each of nums) { result.push((each % div) + each)};
  return result
}