

const loadConfig = () => {

    const success = true;
    return new Promise((resolve, reject) => {

        if(success) {
            resolve({ pods: 4, isAlive: true });
        } else {
            reject({ error: { message: "Unable to perform request"}});
        }

    });
}

exports.loadConfig = loadConfig;