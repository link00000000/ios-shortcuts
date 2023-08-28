import { connect } from "@dagger.io/dagger";

connect(async (client) => {
    const node = client
        .container()
        .from("node:16")
        .withExec(["node", "-v"])

    const version = await node.stdout();

    console.log(`Node version ${version}`);
}, { LogOutput: process.stderr });
