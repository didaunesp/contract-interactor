/**
 * Main script file
 * Run with: yarn script
 */

async function main(): Promise<void> {
  console.log('Hello from script.ts!');
  console.log('TypeScript is working correctly.');
}

main()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });

