function browserHistory(inputObj, input) {
   for (const commandLine of input) {
       let [command, ...site] = commandLine.split(" ");
       let siteStr = site.join(" ");
       if (command === "Open") {
           inputObj['Browser Logs'].push(commandLine);
           inputObj['Open Tabs'].push(siteStr);
       } else if (command === "Close") {
           while (inputObj['Open Tabs'].includes(siteStr)) {
               let index = inputObj['Open Tabs'].indexOf(siteStr);
               inputObj['Open Tabs'].splice(index, 1);
               inputObj['Browser Logs'].push(commandLine);
               inputObj['Recently Closed'].push(siteStr);
           }
       } else {
           inputObj['Open Tabs'].splice(0);
           inputObj['Browser Logs'].splice(0);
           inputObj['Recently Closed'].splice(0);
       }
   }
   console.log(inputObj["Browser Name"]);
   console.log(`Open Tabs: ${inputObj["Open Tabs"].join(", ")}`);
   console.log(`Recently Closed: ${inputObj["Recently Closed"].join(", ")}`);
   console.log(`Browser Logs: ${inputObj["Browser Logs"].join(", ")}`);
}

browserHistory({
   "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
   "Recently Closed": ["Yahoo", "Gmail"],
   "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
   ["Close Facebook", "Open StackOverFlow", "Open Google"]
);