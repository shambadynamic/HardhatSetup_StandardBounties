task("deploy", "Deploy StandardBounties contract")
    .addPositionalParam("name", "The name of the contract that you want to deploy")
    .setAction(async(taskArgs) => {
        const contractName = taskArgs.name

        const networkName = network.name

        console.log(contractName)

        console.log(`Deploying ${contractName} to ${networkName} network`)

        const standardBountiesContractFactory = await ethers.getContractFactory(contractName)

        const standardBountiesContract = await standardBountiesContractFactory.deploy();

        await standardBountiesContract.deployed();

        console.log(`${contractName} deployed to ${standardBountiesContract.address} on ${networkName} network.`)

    })

module.exports = {}