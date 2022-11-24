type ENV_NAME = "production" | "staging" | "develop" | "local"

interface Config {
    LOCK_ADDRESS: string,
    USDT_ADDRESS: string
}

export function getConfig(env: ENV_NAME): Config {
    if (env == "production")
        return {
            LOCK_ADDRESS: "lock production address",
            USDT_ADDRESS: "usdt production address"
        }
    else if (env == "staging") 
        return {
            LOCK_ADDRESS: "",
            USDT_ADDRESS: ""
        }
    else if (env == "develop") 
        return {
            LOCK_ADDRESS: "",
            USDT_ADDRESS: ""
        }
    else 
        return {
            LOCK_ADDRESS: "lock local address",
            USDT_ADDRESS: "usdt local address"
        }
}