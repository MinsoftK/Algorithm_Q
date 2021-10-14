function solution(n, m) {
	let answer = [];
	let tmp = [];
	function DFS(v) {
		if (v === n) {
			answer.push(tmp.splice());
			return;
		} else {
			for (let i = 1; i <= m; i++) {
				tmp.push(i);
				DFS(v + 1);
				tmp.pop();
			}
		}
	}

	DFS(0);
	return answer;
}

console.log(solution(3, 2)); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]
