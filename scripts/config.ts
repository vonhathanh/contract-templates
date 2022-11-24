type ENV_NAME = "production" | "staging" | "develop" | "local"

interface Config {
    LOCK_ADDRESS: string,
    USDT_ADDRESS: string,
    UPGRADEABLE_EXAMPLE_ADDRESS: string
}

export function getConfig(env: ENV_NAME): Config {
    if (env == "production")
        return {
            LOCK_ADDRESS: "",
            USDT_ADDRESS: "",
            UPGRADEABLE_EXAMPLE_ADDRESS: ""
        }
    else if (env == "staging") 
        return {
            LOCK_ADDRESS: "",
            USDT_ADDRESS: "",
            UPGRADEABLE_EXAMPLE_ADDRESS: ""
        }
    else if (env == "develop") 
        return {
            LOCK_ADDRESS: "",
            USDT_ADDRESS: "",
            UPGRADEABLE_EXAMPLE_ADDRESS: ""
        }
    else 
        return {
            LOCK_ADDRESS: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            USDT_ADDRESS: "0x814d58129C2724A53BA637cc4040Bb36442A30D0",
            UPGRADEABLE_EXAMPLE_ADDRESS: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
        }
}