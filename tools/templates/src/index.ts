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

type ProjectType = "shortcut" | "package" | "tool";

async function main(): Promise<ExitStatus> {
    const args = arg({
        "--cwd": String,
        "-d": "--cwd"
    });

    const { projectName, projectType } = await getProjectVariables();
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

async function getProjectVariables() {
    const projectType = await select<ProjectType>({
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

    const projectName = await input({
        message: "Project name",
        validate: (value) => {
            if (value.match(/[A-Z]/) !== null) {
                return "Package name cannot contain uppercase letters";
            }
            
            if (value.match(/\s/) !== null) {
                return "Package name cannot contain spaces";
            }

            return true;
        }
    });

    return { projectType, projectName };
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

