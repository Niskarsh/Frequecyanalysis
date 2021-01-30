
var prompt = require('readline-sync');
let coded = 'wsam ie pjo ysgtm eyipbya .P axg niphay y, mey syw ahgm ewhrg tw hmysyam wh meyiepjo ys .Ag jygtmeyk pmys ie pjo ysavw kkoyjgsy whmy sy amwh rmephmewagh y!Me yigu ynay utg smew ajya apr ywap awjfkya no a mwmnmw ghiwfeyswhve wieuwr wm aepby oyyhae wtmy uox8 fkpiya. Me y fpaavgs uwa mxSrN03u wd dvwmegnmmey dngmya. Mew awameyt';
coded = coded.toLowerCase();

let copy = coded;
let first = true;
let freqTemplate =  {
	'a': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'b': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'c': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'd': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'e': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'f': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'g': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'h': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'i': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'j': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'k': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'l': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'm': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'n': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'o': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'p': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'q': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'r': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	's': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	't': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'u': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'v': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'w': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'x': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'y': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'z': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	' ': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'.': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	',': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'!': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'0': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'1': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'2': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'3': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'4': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'5': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'6': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'7': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'8': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'9': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
	'miscellaneous': {
		original_count: 0,
		original_per: 0,
		modified_count: 0,
		modified_per: 0,
	},
};
let modified = [];
for (let i=0; i<coded.length; i++) {
	modified.push(false);
}

function Count ({ input, list }) {
	let freq = JSON.parse(JSON.stringify(freqTemplate));
	// console.log(freq);
	let alpha = /([a-z]|\.|,| |!|[0-9])/mi;
	for (let i=0; i<input.length; i++) {
		if(!alpha.test(input[i])) {
			if (modified[i]) {
				freq['miscellaneous'].modified_count++;
				freq['miscellaneous'].modified_per = (freq['miscellaneous'].modified_count*100)/parseFloat(input.length)	
			} else {

				freq['miscellaneous'].original_count++;
				freq['miscellaneous'].original_per = (freq['miscellaneous'].original_count*100)/parseFloat(input.length)
			}
		} else {
			if (modified[i]) {
				freq[input[i]].modified_count++;
				freq[input[i]].modified_per = (freq[input[i]].modified_count*100)/parseFloat(input.length)	
			} else {
				freq[input[i]].original_count++;
				freq[input[i]].original_per = (freq[input[i]].original_count*100)/parseFloat(input.length)
			}
		}
	}
	return freq;
}

function Print (freq) {
	for (let name in freq) {
		console.log(`${name} OG: ${freq[name].original_per.toFixed(2)}% REP: ${freq[name].modified_per.toFixed(2)}%`)
	}	
}

function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function Req (str, toReplace, replaceWith) {
	for(let i=0; i<str.length; i++) {
		if (str[i] === toReplace && !modified[i]) {
			str = setCharAt(str, i, replaceWith);
			modified[i] = true;
		}
	}
	return str;
}
let Freq = null;
loop1:
while(true) {
	Freq = Count({ input: copy, list: Freq });
	Print(Freq);
	console.log(copy);
	let moveAhead = prompt.question('Continue (y/n) : ');
	if (moveAhead === 'n') {
		break loop1;
	}
	let toReplace = prompt.question('What to replace ? ');
	toReplace = toReplace === '-' ? ' ': toReplace;
	// console.log(`rr${toReplace}rr`);
	var re = new RegExp(`${toReplace}`, "ig");
	// let re = `/${toReplace}/i`; 
	// console.log(re, re.test(copy));
	let replaceWith = prompt.question('Replace with ? ');
	copy = Req(copy, toReplace, replaceWith); 
}
// console.log(sum)

// let moveAhead = prompt('Continue (y/n) : ');
// console.log(`!!!!!!`, moveAhead)