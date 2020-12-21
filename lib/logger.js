import { add, transports } from 'winston';

function Logger(){
    return add(transports.File,{
        filename:"log/warning.log",
        maxsize:1048576,
        level:"warn"
    });
}

export default new Logger();

var levels = {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
}