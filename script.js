const fs = require('fs');

const mapping = {
    bib: 'CurveInitialBalance',
    brh: 'CurveRecoveryHalfLife',
    vfs: 'EthVsWbtcSlippage',
    clf: 'StressFactor',
}

function test() {
    const allJpeg = fs.readdirSync('./').filter(_ => _.endsWith('.jpg'));
    console.log(allJpeg)

    for(const img of allJpeg) {

        const newImageName = img.replace('bib', 'CurveInitialBalance').replace('brh', 'CurveRecoveryHalfLife').replace('vfs', 'EthVsWbtcSlippage').replace('clf', 'StressFactor');

        fs.cpSync('./' +img, './newclient/' + newImageName)
    }
}

test()