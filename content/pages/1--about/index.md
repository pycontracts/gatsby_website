---
title: Get Started
menuTitle: More Information
---

### Rationale:

#### What is BitcoinPy 

Bitcoin has been around for almost 10 years now. However, despite its use as a store of value and a means of quickly transferring monetary value from A to B, it lacks any other use-case. However, during the recent years new ideas have emerged, one of which are "Smart Contracts" - virtual contracts which are settled based on the "code's law". Think of it as contracts, that have a hard coded set of when-then rules and which cannot be tampered with by any involved party. Ethereum is the first (and so far only) project that has created a well done and nicely useable smart contract ecosystem, although there have been numerous copy cat attempts which implemented their own blockchain layer and are now struggling with an alternation of adoption problems and 51\% attacks. We want to suggest how smart contracts, in a similar fashion as implemented by Ethereum, could be brought to the Bitcoin blockchain. BitcoinPy can be considered a "second layer" addition to the original Bitcoin protocol. The goal is to enable Turing-complete smart contracts that run on the native Bitcoin blockchain. But that is not enough, our vision was to make it as simple as possible. While Ethereum requires either advanced low-level byte code skills, or proficiency in a custom programming language termed Solidity (a lack of a full understanding of this new language may result in things like the [DAO hack](https://medium.com/swlh/the-story-of-the-dao-its-history-and-consequences-71e6a8a551ee) or the [Parity disaster](https://medium.com/chain-cloud-company-blog/parity-multisig-hack-again-b46771eaa838])), our requirement was to keep it as simple as possible: in our solution, users simply code their smart contracts in Python, a language that many are already familiar with and, as such, are likely to avoid such expensive mistakes. 

#### Who the heck are you 

We are a group of long-haired, bearded geeks who truly believe in a wider blockchain adoption over the next decades. As such, we want to contribute our skills, ideas and thoughts on how things might be improved and how we could finally get one step closer to that mysterious "Bitcoin killer application" that so many are desperately craving for. Maybe, if you bump into one of us at a CCC or a defcon conference, you can get us to know personally. Other than that, we will not put our selfies or names on any webpage and we will not brag with our useless collection of academic degrees. Why? Because we can. 

#### A Fair Launch

BitcoinPy can be considered launched the moment the code is available on GitHub and available for everyone to try out. We are not conducting any ICOs, we reject pre-mines and there will be no other pre-allocation of GAS. That is, the project launches in an entirely fair manner with no GAS in circulation. Everyone who wants to get some GAS will need to mine it on their own once the code is available. Even though some developers, who contribute to this project, might privately mine GAS on their own behalf, they have no advantage over anyone else. It's an even playing field. 

#### No Forks
BitcoinPy is a second-layer addition to the existing Bitcoin protocol. As such, it is fully compatible with the entire Bitcoin network in its current stage and with all other traditional Bitcoin nodes running the unmodified Bitcoin core client. Therefore, BitcoinPy neither is a soft- nor hard fork splitting the network into two different chains.

#### Early Launch Phase
Since this project is still exeperimental technology, the launch will include an "early bird" phase where the execution of contracts can be halted centrally in case something goes wrong. Even though transactions are permanent, during this phase incorrectly executed contracts may be reverted or altered, in a way that they reflect what was originally intended. We expect this "early bird" phase to last a few weeks at most. Then, once it is confirmed that everything works as expected, this "functionality" will be removed entirely from the code. If you do not feel comfortable with this, please feel free to chime in once the "early bird" phase is over.

### Internals:

#### The GAS Token

The GAS token, just as the BTC, is stored on the Bitcoin blockchain. It is needed to pay for the execution of the Python based smart contracts. More specifically, each opcode that is executed inside the Python virtual machine, costs currently 100 GAS satoshi, which translates to 0.000001 GAS. The denomination of 1 GAS into GAS satoshi is equal to the BTC denomination. Additionally to the opcodes, each byte either printed to the console or stored in the contract's permanent memory costs additional 100 GAS satoshi. GAS, that is used by the contracts, goes to the GAS miners. At this point it is worth to mention, that certain operators (such as the exponentiation or the modulus operator) internally consist of loops that repeatetly run multiple opcodes. This can cause to bump up the GAS costs quickly.

The maximum possible supply of GAS is 3141592 GAS: miners are getting a certain amount of GAS which is decreasing as the time goes by. After the last GAS has been mined, the miners' rewards are limited to the GAS fees, that were acumulated since the last "mine gas" transaction. 

#### Transaction Fees
GAS tokens are used as a "fee", or "fuel", for the execution of contracts. However, since we are operating on the Bitcoin blockchain, we still need to pay a small network relay fee. That means, in order to use BitcoinPy contracts, you need a small amount of BTC to broadcast things into the Bitcoin network, and GAS to actually fuel the execution of the smart contracts. While this may sound complicated at first, we made sure that the BitcoinQt GUI handles most of the hassle for you without you even noticing.

### Python Contracts: 

#### General Overview

BitcoinPy contracts are developed in Python. Period. There are no additional annotations or code gimmicks that you need to learn. One of the most important things for us was to make the use of smart contracts as simple as possible. The only restriction that applies is, that you cannot use all of the traditional modules that you find in most Python distributions. While you can use all the power that the language gives you, modules that would give you access to the filesystem, network or other evil parts are not present. In face, the only module you can import and use is the Blockchain module.

#### Blockchain Module
The Blockchain module is a module that can be imported and used by any smart contract. While it is not part of a standard Python distribution, you are advised to use our own Python interpreter (contractpython) to develop and test your smart contracts.

This is an overview of the entire functionality of the Blockchain module:

| Function or Object                               | Type           | Description                                                  |
| ------------------------------------------------ | -------------- | ------------------------------------------------------------ |
| blockchain.store                                 | Dictionary     | A python dictionary object. Everything you store here will be stored permanently on the blockchain. Values may be overwritten. |
| blockchain.current\_block\_height()              | Numeric        | The height of the block this transaction was included into   |
| blockchain.current\_block\_time()                | Numeric        | The timestamp of the block this transaction was included into |
| blockchain.current\_block\_id()                  | Hex String     | The hex encoded block hash of the current block              |
| blockchain.previous\_block\_time()               | Numeric        | The timestamp of the previous block                          |
| blockchain.previous\_block\_id()                 | Hex String     | The hex encoded block hash of the previousblock              |
| blockchain.tx\_value()                           | Numeric        | The GAS value that was submitted with this transaction in satoshis |
| blockchain.contract\_balance()                   | Numeric        | The contract's current balance in satoshis                   |
| blockchain.gas\_left()                           | Numeric        | Every user specifies a maximum gas amount to be used when calling a contract - let us call this GAS fee. This value indicates the amount of GAS-fee left at a certain point in the contract execution flow |
| blockchain.contract\_id()                        | Address String | The address of the contract                                  |
| blockchain.tx\_sender()                          | Address String | The address of the transaction's sender                      |
| blockchain.random()                              | Numeric        | A pseudo-random 32 bit integer that comes from a random number generator that was seeded using parameters from the current Bitcoin blockchain's state |
| blockchain.send(address, value)                  | Void           | This call makes the contract send "value" to "address" from its contract balance |
| blockchain.suicide(address)                      | Void           | This call sends the entire balance of the contract to "address" and suicides, i.e., makes the contract unusable in the future |
| blockchain.<br />assert\_address\_check(address) | Void           | Allows you to check for the validity of a Bitcoin address. This call reverts the contract execution if an invalid address was provided. The caller just pays the GAS fees, but not the GAS amount he sent to the contract |
| blockchain.revert()                              | Void           | Reverts the contract execution. The caller just pays the GAS fees, but not the GAS amount he sent to the contract |



#### Balance Behavior

A user who calls a contract usually specifies two things. A "value" in GAS that he is sending to a contract (as a bet to our coin toss game for example, but it can be also 0) and a maximum "GAS fee", which is the maximum amount of GAS that he is willing to pay for the contract execution. Depending on the outcome of the contract execution, the user is either only paying the GAS fee, or paying the GAS fee plus the amount of GAS he is transferring to the contract. Here is a matrix that shows you all possible outcomes: 

| Event                                                        | What does the user pay         |
| ------------------------------------------------------------ | ------------------------------ |
| Contract executes fine                                       | GAS fee<br />+ transferred GAS |
| Contract suicides                                            | GAS fee<br />+ transferred GAS |
| Contract cannot execute properly<br />and throws an exception | GAS fee                        |
| Contract reverts using<br />blockchain.revert()              | GAS fee                        |
| Contract cannot be called<br />(insufficient balance or contract dead) | Nothing                        |

 

#### 