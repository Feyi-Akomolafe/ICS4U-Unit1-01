/**
 * The program shows how many logs can fit

 *   on a truck given the length of the logs.
 *
 * By:      Feyi Akmolafe
 * Version: 1.0
 * Since:   2024-02-15
 */



	 import { createPrompt } from 'bun-promptx'



	 const loglengthString = createPrompt('What length do you want your logs to be?(0.25, 0.5, 1):  ')

	 let loglengthNumber = parseFloat(loglengthString.value)

	 let numberOfLogs = 1100 / (20 * loglengthNumber)

	 console.log(`The truck can carry ${numberOfLogs} logs if they are ${loglengthNumber}m long.`)



	 console.log('\nDone.')


