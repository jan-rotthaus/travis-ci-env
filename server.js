const yourName = process.env.YOUR_NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`Hello ${yourName}!`);
    await sleep(5000);
  }
}

main();
