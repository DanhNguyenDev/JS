function createLogger(namespace){
   return function logger(message){
    console.log(`[${namespace}] ${message}`)
  }
  // return logger
}

const errorLogger = createLogger('Error')('aaaa')
// errorLogger('Loi mat Modbus')

