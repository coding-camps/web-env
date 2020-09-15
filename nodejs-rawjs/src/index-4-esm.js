
import { info as m1_info, info2 as m1_info2 } from "./m01.cjs";

m1_info();
m1_info2();

import {info as m2_info, info2 as m2_info2 } from './m02.mjs';
m2_info();
m2_info2();

// import {default as m3_info, info2 as m3_info2 } from './m03.mjs';
import m3_info, {info2 as m3_info2 } from './m03.mjs';
m3_info();
m3_info2();
