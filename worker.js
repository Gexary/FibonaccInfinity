onmessage = function (e) {
  postMessage(fibonacci(e.data).toString());
};

function fibonacci(n) {
  if (n === 0n) return 0n;
  if (n === 1n) return 1n;

  let a = 0n,
    b = 1n,
    c;
  for (let i = 2n; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
