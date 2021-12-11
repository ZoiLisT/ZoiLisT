const config = require("./config.json");
const db = require('quick.db');
const fs = require("fs");
const monent = reqiure('monent');
require('monent-duration-format');
const prefix = config.Prefix;

client.commands = new Discord.Collection();
