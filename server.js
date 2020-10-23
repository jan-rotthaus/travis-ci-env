
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    const yourName = process.env.YOUR_NAME;
    console.log(`Hello ${yourName}!`);
    await sleep(5000);
  }
}

main();
