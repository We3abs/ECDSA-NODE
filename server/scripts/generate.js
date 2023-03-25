const secp = require ("ethereum-cryptography/secp256k1");
const { toHex } = require ("ethereum-cryptography/utils");


function generateKeys() {
    //public and private key object
    
    keys = {}
    for (let i = 0; i < 3; i++) {
        const privateKey = toHex(secp.utils.randomPrivateKey());
        const publicKey = toHex(secp.getPublicKey(privateKey))
        const address = publicKey.slice(-20)
        keys["keys"+i] = [privateKey, publicKey, address]
    }
    return keys
}

console.log(generateKeys())
/*
keys0: [
    'ee68462fa9cb2ebbb541fbe5079aa57813bb3c51845dc55fcae55fb58ac39569',
    '0457161fd178e631d5c0791da4e642efca4efe588a4646a7bdcc19d9ad5cd38b8ac87addcadd816f57602ab236dff223bb6a2026936d8a5c4af5ba47af06c72d5f',
    '5c4af5ba47af06c72d5f'
  ],
  keys1: [
    '4a271f8c5072bb551c80812b07a8eb5df65a770d09337d4e9e54c4ee532af801',
    '042f76d7c728c06631978cb5eac801d5d53fa962b6fddb33080811814ee2d1144fc5d639ad5cf8e7633a5b2d95531e1dd1e1eca37fe1ca761e1bc5d856b436227e',
    '761e1bc5d856b436227e'
  ],
  keys2: [
    '8402259d32b6479ebb32a36242c8a6d11701e829ce3e92c1085bad53f1282a10',
    '0433b7415b9cc5e86b34b7a8a5c6d64be4bf616fd4d29c1a8c4f3f8e033472b7e6a5075a36fa68b626fb154b0a5701c6dbb692b2acccf809882ec37e1796992ba4',
    '09882ec37e1796992ba4'
  ]
  */