let time = 0

export const startTime = () => {
  time = Date.now()
}

export const logElapsed = () => {
  console.log('Elapsed time ' + (Date.now() - time) + ' ms')
}