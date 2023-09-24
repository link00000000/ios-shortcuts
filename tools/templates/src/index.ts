import process from "node:process";
import path from "node:path";
import arg from "arg"
import { confirm, input, select } from "@inquirer/prompts";

enum ExitStatus {
    Success,
    Abort,
    Error
};

const ExitCode: Record<ExitStatus, number> = {
    [ExitStatus.Success]: 0,
    [ExitStatus.Abort]: 0,
    [ExitStatus.Error]: 1,
} as const;

const ProjectTypes = ["shortcut", "package", "tool"] as const;
type ProjectType = typeof ProjectTypes[number];

async function main(): Promise<ExitStatus> {
    const args = arg({
        "--cwd":    String,
        "-d":       "--cwd",

        "--project-type":   String,
        "--type":           "--project-type",
        "-t":               "--project-type",

        "--name":   String,
        "-n":       "--name"
    });

    const projectName = parseProjectName(args["--name"]) ?? await promptForProjectName();
    const projectType = parseProjectType(args["--project-type"]) ?? parseProjectType(args._[0]) ?? await promptForProjectType();
    const workingDirectory = args["--cwd"] ?? process.cwd();
    const outputDirectory = getOutputDirectory(projectType, projectName, workingDirectory);

    if (!await confirm({ message: `Creating new ${projectType} project ${projectName} (${outputDirectory}). Continue?`, default: true })) {
        return ExitStatus.Success;
    }

    switch (projectType) {
        case "package":
            await import("./templates/packageTemplate").then(({ PackageTemplateRenderer }) => new PackageTemplateRenderer(outputDirectory).render({ projectName }));
            break;
        case "shortcut":
            await import("./templates/shortcutTemplate").then(({ ShortcutTemplateRenderer }) => new ShortcutTemplateRenderer(outputDirectory).render({ projectName }));
            break;
        case "tool":
            await import("./templates/toolTemplate").then(({ ToolTemplateRenderer }) => new ToolTemplateRenderer(outputDirectory).render({ projectName }));
            break;
    }

    return ExitStatus.Success;
}

function parseProjectName(name: string | undefined): string | undefined {
    if (name === undefined) {
        return undefined;
    }

    const validation = validateProjectName(name);

    if (validation === true) {
        return name!;
    }

    if (validation === false) {
        throw new Error("Project name invalid");
    }

    throw new Error(validation);
}

function parseProjectType(type: string | undefined): ProjectType | undefined {
    if (type !== undefined && ProjectTypes.some(x => x === type)) {
        return type as ProjectType;
    }
    
    return undefined;
}

async function promptForProjectType() {
    return await select<ProjectType>({
        message: "Project type",
        choices: [
            {
                name: "Shortcut",
                value: "shortcut",
            },
            {
                name: "Package",
                value: "package",
            },
            {
                name: "Tool",
                value: "tool",
            }
        ]
    });
}

async function promptForProjectName() {
    return await input({
        message: "Project name",
        validate: validateProjectName
    });
}

function validateProjectName(value: string | undefined): boolean | string  {
    if (value === undefined || value.length === 0) {
        return "Package name cannot be empty";
    }

    if (value.match(/[A-Z]/) !== null) {
        return "Package name cannot contain uppercase letters";
    }
    
    if (value.match(/\s/) !== null) {
        return "Package name cannot contain spaces";
    }

    return true;
}

function getOutputDirectory(projectType: ProjectType, projectName: string, workingDirectory: string) {
    switch (projectType) {
        case "package":
            return path.resolve(workingDirectory, "packages", projectName);
        case "shortcut":
            return path.resolve(workingDirectory, "shortcuts", projectName);
        case "tool":
            return path.resolve(workingDirectory, "tools", projectName);
    }
}

main()
    .then((exitStatus) => {
        if (exitStatus != ExitStatus.Success) {
            console.error(`Exitted with code ${ExitCode[exitStatus]}`);
        }

        process.exitCode = ExitCode[exitStatus];
    })
    .catch((ex) => {
        console.error(ex);

        process.exitCode = ExitCode[ExitStatus.Error];
    });

