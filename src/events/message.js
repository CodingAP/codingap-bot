let ligmaCommand = require('../commands/ligma');

module.exports = (client, message) => {
    if (message.context.startsWith('-ligma')) {
        return ligmaCommand(message);
    }
}