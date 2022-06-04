require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss grace oppose bridge slight'; 
let testAccounts = [
"0xa2422bc27a3e4b685853ecfb5c875eaa4a2c0c81279e7dc9687f24a0de1615b0",
"0x4a1d9eebf469207dee8532e4c5acdf66414d3a2624099cb143face45967dd559",
"0x1c3d49d58605c1e47dabdeded56886b5c21718ea04cbef6dc1d50aa5b06d2bff",
"0xc863bf372fe9d968f86ad4830f9ef295a30bf1f372551bc9c7173b133c96e4ae",
"0x2dfab22884436593cd6df7145c08cb402199f99ea691cf8a0505a7ae43e8790b",
"0x6d0401a18ad167a4f08bd49f0be7a0e4da00bd593542673c80d97a2ad09ab4be",
"0xea5c56ccd6ba3124a13fae7ecc2e6cfd253dcacd5ebe89acec1541b05abd4e42",
"0xe268aa1dcde19a7382213d77e38d47131aba5cb41f1fcc7b86fda983c82d0a64",
"0xccdf2de28454d34de4516b5cc0a65a60335703e547497cc80b3a35ca813bc4e1",
"0x63989c447c2b6dc376e8a8dc4ddd40d233632c00822e9f88b220d1892e8696c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

