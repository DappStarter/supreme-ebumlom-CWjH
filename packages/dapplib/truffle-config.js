require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note night exchange hope gloom swap genuine'; 
let testAccounts = [
"0x51e60f1659bc1c6aa87a6be32bac2f4baf569fdc57037cba5b146bdb54ad1c1d",
"0x0161cae901cbc5481d216a468f93c91a0d18d2e02725cc3dfa267261168c69d4",
"0x78592682f43b798e2764fcf8527ae09e6c81a037061cc854001a03ab4fe5c292",
"0x5fed5af1339965ec4107e82bb2b5a148057c4e4aad393bf973402a594a7229e1",
"0x4b0f646504dec1ac02d078055ac62256ba808eeb744d7c799dc7cc3bc1492e83",
"0xc8e8d5d85a932917d766710f437bcd380b9f3a33c9f1921f3d3fe056028ab2bc",
"0x5b156a998b9c0eeb83f81423f1b46392242f4b2e1ccffe6998a227ba0a590450",
"0x228e48052a4a0c9ab0a70199ba6b5a22c0d931d101c4b8416fa166afaa29373e",
"0x8dc1cd0a4f6f05345f63c6372d63d2d5c10b1fe93827ac29c7be78ea60e5151b",
"0x13577ca4c6cec7137667725d07b7c69231f791ba3a1f86e770d95381f99eb9a9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

