import React, { Component } from "react";
import LiquidityExamplesContract from "./contracts/LiquidityExamples.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = LiquidityExamplesContract.networks[networkId];

      const instance = new web3.eth.Contract(
        LiquidityExamplesContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      console.log("DEPLOYED NETWORK ADDRESS: ", deployedNetwork.address);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const {contract } = this.state;


    console.log("RUN EXAMPLE: ");
    // Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();
    
  // const response2 = await contract.methods.getLuckyNumber2().call();
    // const response3 = await contract.methods.getLuckyNumber3().call();
    //const responseMint = await contract.methods.mintNewPosition().send({from: '0x7456C67FBfFb170089729971A1B4fa9C81d3B9E6'});
    //await contract.methods.beformeMintNewPosition(999314059552819, 957).send({from: '0x7456C67FBfFb170089729971A1B4fa9C81d3B9E6'});
    //await contract.methods.beforeMintNewPosition2(957, 999314059552819).send({from: '0x7456C67FBfFb170089729971A1B4fa9C81d3B9E6'});
    //await contract.methods.beforeMintNewPosition2(109,   112062489657845).send({from: '0x7456C67FBfFb170089729971A1B4fa9C81d3B9E6'});
                                                    
    //await contract.methods.mintNewPosition(10000000000000, 10).send({from: '0x7456C67FBfFb170089729971A1B4fa9C81d3B9E6'});
    //await contract.methods.approveContract(true, 20000000, false, 100).send({from: '0x7456C67FBfFb170089729971A1B4fa9C81d3B9E6'});
    //const response = await contract.methods.getNoWay().call();

    // console.log("RESPONSE2: ", response2);
    // console.log("RESPONSE3: ", response3);
    // Update state with the result.
   // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        {/* <div>The stored value is now: {this.state.storageValue}</div> */}
      </div>
    );
  }
}

export default App;
