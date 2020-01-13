class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        requiredSpace = Number(requiredSpace);

        if (requiredSpace > this.hddMemory) {
            throw new Error("There is not enough space on the hard drive");
        }

        const newProgram = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(newProgram);
        this.hddMemory -= requiredSpace;

        return newProgram;
    }

    uninstallAProgram(name) {
        const programIndex = this.installedPrograms.findIndex(obj => obj.name === name);

        if (programIndex === -1) {
            throw new Error("Control panel is not responding");
        }

        const programMemory = this.installedPrograms[programIndex].requiredSpace;
        this.installedPrograms.splice(programIndex, 1);
        this.hddMemory += programMemory;

        return this.installedPrograms;
    }

    openAProgram(name) {
        const program = this.installedPrograms.find(obj => obj.name === name);

        if (program === undefined) {
            throw new Error(`The ${name} is not recognized`);
        }

        const runningProgram = this.taskManager.find(obj => obj.name === name);

        if (runningProgram) {
            throw new Error(`The ${name} is already open`);
        }

        const ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        const usedRamMemory = this.taskManager.reduce((a, b) => (a + b.ramUsage), 0);
        const usedCPU = this.taskManager.reduce((a, b) => (a + b.cpuUsage), 0);

        if (ramUsage + usedRamMemory >= 100) {
            throw new Error(`${name} caused out of memory exception}`)
        }
 
        if (cpuUsage + usedCPU >= 100) {
            throw new Error(`${name} caused out of cpu exception}`)
        }

        const programUsage = {
            name: program.name,
            ramUsage,
            cpuUsage
        }

        this.taskManager.push(programUsage);

        return programUsage;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }

        const runningPrograms = this.taskManager
            .map(obj => {
                return `Name - ${obj.name} | Usage - CPU: ${obj.cpuUsage.toFixed(0)}%, RAM: ${obj.ramUsage.toFixed(0)}%`;
            })
            .join("\n");

        return runningPrograms;
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());