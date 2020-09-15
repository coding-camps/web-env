// In CMD

// CMD
const m1 = require('./m01.cjs');
m1.info();
m1.info2();

// ES6 module
(async ()=>{
    const m2 = await import('./m02.mjs');
    m2.info();
    m2.info2();
})();

(async ()=> {
    const m3 = await import('./m03.mjs');
    m3.default();
    m3.info2();
})();

