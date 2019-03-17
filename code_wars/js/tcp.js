function traverseTCPStates(eventList){
    let state = "CLOSED"
    let obj = makeObj("CLOSED: APP_PASSIVE_OPEN -> LISTEN CLOSED: APP_ACTIVE_OPEN  -> SYN_SENT LISTEN: RCV_SYN          -> SYN_RCVD LISTEN: APP_SEND         -> SYN_SENT LISTEN: APP_CLOSE        -> CLOSED SYN_RCVD: APP_CLOSE      -> FIN_WAIT_1 SYN_RCVD: RCV_ACK        -> ESTABLISHED SYN_SENT: RCV_SYN        -> SYN_RCVD SYN_SENT: RCV_SYN_ACK    -> ESTABLISHED SYN_SENT: APP_CLOSE      -> CLOSED ESTABLISHED: APP_CLOSE   -> FIN_WAIT_1 ESTABLISHED: RCV_FIN     -> CLOSE_WAIT FIN_WAIT_1: RCV_FIN      -> CLOSING FIN_WAIT_1: RCV_FIN_ACK  -> TIME_WAIT FIN_WAIT_1: RCV_ACK     -> FIN_WAIT_2 CLOSING: RCV_ACK         -> TIME_WAIT FIN_WAIT_2: RCV_FIN      -> TIME_WAIT TIME_WAIT: APP_TIMEOUT   -> CLOSED CLOSE_WAIT: APP_CLOSE    -> LAST_ACK LAST_ACK: RCV_ACK        -> CLOSED")
    // get  state
    eventList.forEach(event => {
        let key = obj[state]
        if(!key) return 'ERROR'
        state = key[event]
    })
  // make object out of table
    function makeObj(str) {
      let obj = {};
      let splitArr = str.split(" ");
      for (var i = 0; i < splitArr.length; i++) {
        let key = splitArr[i];
        if (key.endsWith(":")) {
          let value = splitArr[i + 1];
          for (var j = i; j < splitArr.length; j++) {
            if (splitArr[j] === "->") {
              let state = splitArr[j + 1];
              let pair = { [value]: state };
              key = key.slice(0, key.length - 1);
              obj[key] = Object.assign(pair, obj[key]);
              break;
            }
          }
        }
      }
      return obj;
    }

  return state  ? state : "ERROR"
}

console.log(traverseTCPStates([ 'RCV_SYN', 'RCV_ACK', 'APP_CLOSE' ]))


const STR="CLOSED: APP_PASSIVE_OPEN -> LISTEN CLOSED: APP_ACTIVE_OPEN  -> SYN_SENT LISTEN: RCV_SYN          -> SYN_RCVD LISTEN: APP_SEND         -> SYN_SENT LISTEN: APP_CLOSE        -> CLOSED SYN_RCVD: APP_CLOSE      -> FIN_WAIT_1 SYN_RCVD: RCV_ACK        -> ESTABLISHED SYN_SENT: RCV_SYN        -> SYN_RCVD SYN_SENT: RCV_SYN_ACK    -> ESTABLISHED SYN_SENT: APP_CLOSE      -> CLOSED ESTABLISHED: APP_CLOSE   -> FIN_WAIT_1 ESTABLISHED: RCV_FIN     -> CLOSE_WAIT FIN_WAIT_1: RCV_FIN      -> CLOSING FIN_WAIT_1: RCV_FIN_ACK  -> TIME_WAIT FIN_WAIT_1: RCV_ACK     -> FIN_WAIT_2 CLOSING: RCV_ACK         -> TIME_WAIT FIN_WAIT_2: RCV_FIN      -> TIME_WAIT TIME_WAIT: APP_TIMEOUT   -> CLOSED CLOSE_WAIT: APP_CLOSE    -> LAST_ACK LAST_ACK: RCV_ACK        -> CLOSED"
const actions = {
    CLOSED: {
        APP_PASSIVE_OPEN: "LISTEN",
        APP_ACTIVE_OPEN: "SYN_SENT"
    },
    LISTEN: {
        RCV_SYN:"SYN_RCD",
        APP_SEND: "SYN_SEND",
        APP_CLOSE: "CLOSED"
    },
    SYN_RCVD: {
        APP_CLOSE:"FIN_WAIT_1",
        RCV_ACK: "ESTABLISHED"
    },
    SYN_SENT: {
        RCV_SYN: "SYN_RCVD",
        RCV_SYN_ACK: "ESTABLISHED",
        APP_CLOSE: "CLOSED"
    },
    ESTABLISHED: {
        RCV_FIN: "CLOSE WAIT"
    }
}
// )
